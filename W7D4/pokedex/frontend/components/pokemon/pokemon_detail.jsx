import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


class PokemonDetail extends React.Component {

  componentWillMount () {
    this.props.requestOnePokemon(this.props.pokemon.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.requestOnePokemon(newProps.match.params.id);
    }
  }

  render() {
    if (this.props.pokemon.moves === undefined ) {
      return null;
    }

      const moves = this.props.pokemon.moves.join(", ");

      const items = Object.values(this.props.items).map(item => {
        return (
          <li key={item.id}>
             <Link to={`/pokemon/${this.props.pokemon.id}/item/${item.id}`}>
               <img src={item.image_url}></img>
             </Link>
          </li>
        );
      });

    return (

    <div className="pokemonDetail">
      <figure>
        <img src={this.props.pokemon.image_url}></img>
      </figure>
      <ul>
        <li>{this.props.pokemon.name}</li>
        <li>Type: {this.props.pokemon.poke_type}</li>
        <li>Attack: {this.props.pokemon.attack}</li>
        <li>Defense: {this.props.pokemon.defense}</li>
        <li>Moves: {moves}</li>
      </ul>
      <section className="items">
        <h3>Items: </h3>
        <ul>{items}</ul>
      </section>
      <Route path='/pokemon/:id/item/:itemId' component={ItemDetailContainer} />
    </div>
  );
  }
}

export default PokemonDetail;
