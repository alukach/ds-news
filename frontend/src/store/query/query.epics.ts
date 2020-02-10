import { LOCATION_CHANGE, replace } from "connected-react-router";
import { ofType } from "redux-observable";
import { REHYDRATE } from "redux-persist";
import { concat, from, merge, of, timer } from "rxjs";
import {
  catchError,
  debounceTime,
  filter,
  map,
  mergeMapTo,
  pairwise,
  repeat,
  switchMap,
  switchMapTo,
  takeUntil,
  takeWhile
} from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { fetchToken } from "../auth/auth.actions";
import { RootAction, RootEpic, RootState } from "../types";
import {
  executeSearch,
  setPollingTimer,
  setQuery,
  startPolling,
  stopPolling
} from "./query.actions";
import { getQueryString } from "./query.selectors";
import { getQueryFromString } from "./utils";

const queryChanged = ([prevState, curState]: [RootState, RootState]) =>
  JSON.stringify(prevState.query.query) !==
  JSON.stringify(curState.query.query);

/**
 * When our search parameters update, update URL
 */
const setUrl: RootEpic = (action$, state$, { config }) =>
  state$.pipe(
    pairwise(),
    filter(queryChanged),
    debounceTime(config.searchDebounceMs), // Without debounce, the app can feel sluggish when each keystroke updates the URL
    map(([_, curState]) => curState.query.query),
    map(query =>
      replace({
        ...state$.value.router.location,
        search: `q=${encodeURIComponent(getQueryString(query))}`
      })
    )
  );

/**
 * When we load application, rehydrate query from URL
 */
const loadFromUrl: RootEpic = (action$, state$, { config }) =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    filter(({ payload }) => payload.location.pathname === config.paths.feed),
    filter(({ payload }) => payload.isFirstRendering),
    map(() =>
      setQuery(
        getQueryFromString(state$.value.router.location.search.slice(3)) // Slice to ignore '?q='
      )
    )
  );

/**
 * Trigger a search to Github in response to particular events
 */
const triggerSearchEpic: RootEpic = (action$, state$, { config }) =>
  // Trigger search on...
  merge(
    // ... actions where ...
    action$.pipe(
      filter((action: RootAction) =>
        [
          // ... login occurred
          isActionOf(fetchToken.success),
          // ... poll counter hits 0
          (action: RootAction) =>
            isActionOf(setPollingTimer)(action) && action.payload === 0
        ].some(check => check(action))
      )
    ),

    // ... states where ....
    state$.pipe(
      // ...compared to last state ...
      pairwise(),
      // ... query has changed
      filter(queryChanged)
    )
  ).pipe(
    // Throttle search executions
    debounceTime(config.searchDebounceMs),
    // Only if user has an access token
    filter(() => !!state$.value.auth.token),
    // Execute search with computed query string
    map(() => executeSearch.request(getQueryString(state$.value.query.query)))
  );

/**
 * When our app first hydrates on load, take action
 */
const rehydrationEpic: RootEpic = (action$, state$) =>
  action$.pipe(
    ofType(REHYDRATE),
    mergeMapTo(
      concat(
        // Refresh our query results if we are logged in
        of(
          executeSearch.request(getQueryString(state$.value.query.query))
        ).pipe(filter(() => !!state$.value.auth.token)),

        // Start polling if polling is set to active and we are logged in
        of(startPolling()).pipe(
          filter(() => !!state$.value.query.polling.active),
          filter(() => !!state$.value.auth.token)
        )
      )
    )
  );

const pollQuery: RootEpic = (action$, state$) =>
  action$.pipe(
    ofType(startPolling),
    switchMapTo(
      timer(0, 1000).pipe(
        // Compute diff between polling time and current counter value
        map(val => state$.value.query.polling.interval - val),
        takeWhile(val => val >= 0),
        map(setPollingTimer),
        repeat(),
        takeUntil(action$.pipe(ofType(stopPolling)))
      )
    )
  );

/**
 * Execute search with Github
 */
const executeSearchEpic: RootEpic = (action$, state$, { github, ajax }) =>
  action$.pipe(
    filter(isActionOf(executeSearch.request)),
    // switchMap ensures we ignore the results of ongoing search requests
    switchMap(({ payload }) =>
      from(
        // TODO: Consider using the ajax tool to enable cancellation
        github.query({ query: payload, token: state$.value.auth.token })
      ).pipe(
        map(response => executeSearch.success(response)),
        catchError(message => of(executeSearch.failure(message)))
      )
    )
  );

export const epics = [
  setUrl,
  loadFromUrl,
  triggerSearchEpic,
  executeSearchEpic,
  pollQuery,
  rehydrationEpic
];