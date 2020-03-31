import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos, fetchTodos, createTodo } from './actions/todo_actions';
// import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import {getTodos} from './util/todo_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={configureStore()}/>, root);
  window.store = configureStore();
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.getTodos = getTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
});
