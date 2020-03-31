import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index.jsx';
import {requestAllPokemon} from '../../actions/pokemon_actions';


const mapStatetoProps = (state, ownProps) => {
  return {
  pokemon: selectAllPokemon(state)
};
};

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PokemonIndex);
