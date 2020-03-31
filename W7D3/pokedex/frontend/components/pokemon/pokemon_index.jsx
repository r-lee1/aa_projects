import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.pokemon.length === 0) {
      return (
        <ul></ul>
      );
    } else {
      const pokeList = this.props.pokemon.map(poke =>
        <li key={poke.id}>
          <p>{poke.name}</p>
          <img src={poke.image_url}></img>
        </li>
      );
      return (
        <ul>
          {pokeList}
        </ul>
      );

    }
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

}

export default PokemonIndex;
