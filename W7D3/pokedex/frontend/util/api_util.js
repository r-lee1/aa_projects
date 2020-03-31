export const fetchAllPokemon = () => {
  return $.ajax({
    url: './api/pokemon',
    type: 'GET',
    dataType: 'json'
  });
};
