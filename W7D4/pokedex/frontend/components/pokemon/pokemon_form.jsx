import React from 'react';

class PokemonForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.moves = [];
    this.handleInput = this.handleInput.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleInput(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleCreate() {
    return e => {
      e.preventDefault();
      const moves = [];
      moves.push(this.state.move1);
      moves.push(this.state.move2);
      this.setState({ "move": moves });
      this.props.createPokemon(this.state);
    };
  }


  render () {
    return(
    <form>
      <label>Name:
        <input type="text" onChange={this.handleInput("name")} val={this.state.name}></input>
      </label>

      <label>Image Url:
        <input type="text" onChange={this.handleInput("image_url")} val={this.state.image_url}></input>
      </label>

      <label>Type:
        <input type="text" onChange={this.handleInput("poke_type")} val={this.state.poke_type}></input>
      </label>

      <label>Attack:
        <input type="text" onChange={this.handleInput("attack")} val={this.state.attack}></input>
      </label>

      <label>Defense:
        <input type="text" onChange={this.handleInput("defense")} val={this.state.defense}></input>
      </label>

      <label>Move 1:
        <input type="text" onChange={this.handleInput("move1")} val={this.state.move1}></input>
      </label>

      <label>Move 2:
        <input type="text" onChange={this.handleInput("move2")} val={this.state.move2}></input>
      </label>

      <input type="submit" onClick={this.handleCreate()}></input>
    </form>
  );
  }

}

export default PokemonForm;
