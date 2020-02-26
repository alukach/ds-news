import { push } from "connected-react-router";
import { of } from "rxjs";
import { catchError, filter, map, mapTo, switchMap } from "rxjs/operators"; // tslint:disable-line
import { isActionOf } from "typesafe-actions";
import { RootEpic } from "../types";
import { fetchToken } from "./auth.actions";

const fetchGithubToken: RootEpic = (action$, state$, { ajax, config }) =>
  action$.pipe(
    filter(isActionOf(fetchToken.request)),
    switchMap(({ payload }) =>
      ajax
        .post(
          config.api.auth,
          {
            code: payload
          },
          {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        )
        .pipe(
          map(response => response.response),
          map(response =>
            response.error
              ? fetchToken.failure(
                  response.error_description.split("+").join(" ")
                )
              : !response.access_token
              ? fetchToken.success("Received invalid access token")
              : fetchToken.success(response.access_token)
          ),
          catchError(message => of(fetchToken.failure(message)))
        )
    )
  );

const redirectHomeAfterLogin: RootEpic = (action$, state$, { config }) =>
  action$.pipe(
    filter(isActionOf(fetchToken.success)),
    mapTo(push(`${config.basePath}${config.paths.feed}`))
  );

export const epics = [fetchGithubToken, redirectHomeAfterLogin];
