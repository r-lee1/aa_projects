import * as APIUtil from '../util/api_util.js';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveOnePokemon = (pokemon) => {
  if (!pokemon.items) {
    pokemon.items = {};
  }
  return {
    type: RECEIVE_ONE_POKEMON,
    pokemon: pokemon.pokemon,
    items: pokemon.items
  };
};

export const requestOnePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchOnePokemon(pokemonId)
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
);

export const createPokemon = (pokeParams) => (dispatch) => {
  APIUtil.createPokemon(pokeParams)
  .then(pokemon => dispatch(receiveOnePokemon(pokemon)));
};
