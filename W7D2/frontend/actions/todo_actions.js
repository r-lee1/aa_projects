export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

import * as APIUtil from '../util/todo_api_util.js';
import receiveErrors from './error_actions';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const fetchTodos = (dispatch) => {
  APIUtil.getTodos().then((serverTodos) => {
    console.log(serverTodos);
    //Do someething to convert array of objects to object of objects
    let newTodos = {};
    for (const todo of serverTodos) {
      newTodos[`${todo.id}`] = todo;
    }
    console.log(newTodos);
    dispatch(receiveTodos(newTodos));
  });
};

export const createTodo = (todo) => {
  return (dispatch) => {
    console.log(APIUtil.createTodo(todo));
    return APIUtil.createTodo(todo).then(
      (newTodo) => { dispatch(receiveTodo(newTodo)); },
      (err) => { dispatch(receiveErrors(err.responseJSON)); }
    );
  };
};
