import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import * as _ from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      return _.merge({}, state, { [action.pokemon.id]: action.pokemon });
    default:
      return state;
  }
};

export default pokemonReducer;
