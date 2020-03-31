export const thunk = ({dispatch, getState}) => next => (action) => {
  if (typeof action === "function" ) {
    // console.log(action);
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};
