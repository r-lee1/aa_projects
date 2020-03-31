
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map((key) => {

    return state.todos[key];
  });
  // console.log(todos);
  return todos;
};

// export default allTodos;
