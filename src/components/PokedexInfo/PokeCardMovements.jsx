import React from 'react'
import TitleInfo from './TitleInfo'
import './styles.css/PokeCardMovements.css'

const PokeCardMovements = ({ pokemon }) => {
  console.log(pokemon?.moves);
  return (
    <article className='c-poke-movements'>
      <TitleInfo
        title='Movements'
      />
      {
        (pokemon?.moves.length === 0) ?
          <span className='poke-movements__empty'>Este pokemon no tiene ningún movimiento.</span>
          :
          <ul className='poke-movements__list'>
            {
              pokemon?.moves.map(move => (
                <li className='poke-movements__item' key={move.move.name}>{move.move.name}</li>
              )
              )
            }
          </ul>
      }

    </article>
  )
}

export default PokeCardMovements