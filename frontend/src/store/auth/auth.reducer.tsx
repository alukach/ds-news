import { combineReducers } from "redux";
import { createReducer, getType } from "typesafe-actions";
import { fetchToken, logout } from "./auth.actions";

export type AuthState = Readonly<{
  token: string;
}>;
const initialState: AuthState = {
  token: ""
};

const tokenReducer = createReducer(initialState.token)
  .handleType(getType(fetchToken.success), (state, action) => action.payload)
  .handleType(getType(logout), state => "");

// TODO: Handle fetchToken.failure, fetchToken.start

export default combineReducers({
  token: tokenReducer
});