import React from 'react'
import './styles.css/PokeStat.css'

const PokeStat = ({ stat }) => {

  const objStyleBar = {
    gridColumn: `span ${stat.base_stat}`
  }
  const translatedNames = {
    hp: "Hp",
    attack: "Ataque",
    defense: "Defensa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defensa Especial",
    speed: "Velocidad"
  };
  const translatedName = translatedNames[stat.stat.name] || stat.stat.name.replace(/-/g, ' ');
  return (
    <li className='c-poke-stat'>
      <div className='poke-stat__text'>
        <h4 className={`poke-stat_name-stat ${stat.stat.name === 'hp' ? `poke-stat_name-stat--hp` : ''}`}>
        {translatedName}
        </h4>
        <span className='poke-stat__number'>{stat.base_stat}/150</span>
      </div>
      <div className='poke-stat__graphic'>
        <div className="poke-stat__graphic-bar" style={objStyleBar}></div>
      </div>
    </li>
  )
}

export default PokeStat