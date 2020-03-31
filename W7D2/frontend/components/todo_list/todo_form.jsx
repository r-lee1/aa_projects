import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    // this.createTodo = props.createTodo;
    this.state = {
      title: "",
      body: "",
      done: false
    };
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  submitTodo(e) {
    e.preventDefault();
    // debugger;
    let todo = this.state;

    this.props.createTodo(todo).then(
      () => this.setState({title: '', body: ''})
    ); //createTodo needs to return Promise object to call then here
    //maybe setState after create
  }

  render() {
    return (
      <div>
        <p>{this.props.errors}</p>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <label >Title
            <input onChange={this.linkState('title')} type="text" value={this.state.title}></input>
          </label>
          <label>Body
            <input onChange={this.linkState('body')} type="text" value={this.state.body}></input>
          </label>
          <input type="submit" value="Create Todo!"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;
