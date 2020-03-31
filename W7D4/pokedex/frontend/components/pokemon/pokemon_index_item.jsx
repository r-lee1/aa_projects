import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = (prop) => (
  <li key={prop.pokemon.id}>
    <img src={prop.pokemon.image_url}></img>
    <Link to={`/pokemon/${prop.pokemon.id}`}>{prop.pokemon.name}</Link>
  </li>
);

export default PokemonIndexItem;
