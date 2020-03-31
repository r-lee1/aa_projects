export const getTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'GET',
    dataType: 'json'
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: {todo: todo },
    dateType: 'json'
  });
};
