import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeCardMainInfo from '../components/PokedexInfo/PokeCardMainInfo';
import PokeCardMovements from '../components/PokedexInfo/PokeCardMovements';
import './styles/PokedexInfo.css';

const PokedexInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <main className='c-pokedex-info-main'>
      <PokeCardMainInfo pokemon={pokemon} />
      <PokeCardMovements pokemon={pokemon} />
    </main>
  );
};

export default PokedexInfo;