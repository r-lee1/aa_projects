import * as APIUtils from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    current_user: user
  };
};

export const receiveErrors = (errors = []) => {
  return {
    type: RECEIVE_ERRORS,
    session: errors
  };
};

export const signup = (user) => (dispatch) => {
  const { username, password } = user;
  APIUtils.signup(username, password).thean( result => dispatch(receiveCurrentUser(result)));
};

export const login = (user) => (dispatch) => {
  const { username, password } = user;
  APIUtils.login(username, password).then( result => dispatch(receiveCurrentUser(result)));
};

export const logout = () => (dispatch) => {
  APIUtils.logout().then( result => dispatch(receiveCurrentUser(null)));
};
