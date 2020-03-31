import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
  createPokemon: (pokeParams) => dispatch(createPokemon(pokeParams))
});

export default connect(
  mapDispatchToProps
)(PokemonForm);
