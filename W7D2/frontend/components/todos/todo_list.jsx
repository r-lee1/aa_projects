import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

// const TodoList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ul>
//         {
//           props.todos.map((todo) => (
//             <TodoListItem key={todo.id} todo={todo} />
//           ))
//         } </ul>
//       <TodoForm receiveTodo={props.receiveTodo}/>
//     </div>
//   );
// };

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // console.log("mounted");
    this.props.fetchTodos();

  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} />
            ))
          } </ul>
        <TodoForm createTodo={this.props.createTodo}
                  errors={this.props.errors}
          />
      </div>
    );
  }
}

export default TodoList;
