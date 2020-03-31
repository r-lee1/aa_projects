export const signup = (username, password) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user: { username: username, password: password} }
  });
};

export const login = (username, password) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user: { username: username, password: password} }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
