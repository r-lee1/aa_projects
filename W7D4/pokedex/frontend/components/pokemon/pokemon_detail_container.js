import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail.jsx';
import {requestOnePokemon} from '../../actions/pokemon_actions';



const mapStatetoProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.id],
    items: state.entities.items
  };
};


const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PokemonDetail);
