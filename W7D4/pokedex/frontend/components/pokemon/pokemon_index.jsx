import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';


class PokemonIndex extends React.Component{

  render() {

    if (this.props.pokemon.length === 0) {
      return (
        <ul></ul>
      );
    } else {

      const pokemonItems = this.props.pokemon.map(poke =>
        <PokemonIndexItem key={poke.id} pokemon={poke} />);

      return (
        <section className="app">
          <ul className ="index">
            {pokemonItems}
          </ul>
          <Route exact path="/" component={PokemonFormContainer} />
          <Route path="/pokemon/:id" component={PokemonDetailContainer} />

        </section>
      );

    }
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

}

export default PokemonIndex;
