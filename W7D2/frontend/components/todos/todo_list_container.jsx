import { connect } from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, fetchTodos, createTodo} from '../../actions/todo_actions';



const mapStateToProps = (state) => {
  // console.log("inside mapStateToProps");

  return {
    todos: allTodos(state), //hold array of todos
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos)

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
