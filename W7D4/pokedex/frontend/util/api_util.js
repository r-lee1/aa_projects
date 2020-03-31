export const fetchAllPokemon = () => {
  return $.ajax({
    url: './api/pokemon'
  });
};

export const fetchOnePokemon = (pokemonId) => {
  return $.ajax({
    url: `./api/pokemon/${pokemonId}`
  });
};

export const createPokemon = (pokeParams) => {
  return $.ajax({
    url: './api/pokemon',
    method: 'POST',
    data: { pokemon: pokeParams }
  });
};
