
import { useDispatch, useSelector } from 'react-redux'
import SelectPokesPerPage from '../components/Config/SelectPokesPerPage'
import { setPokePerPageGlobal } from '../store/slices/pokePerPage.slice'
import './styles/Config.css'

const Config = () => {
  const rootReact = document.querySelector('#root')
  const { darkmode, pokePerPage } = useSelector(state => state)
  const dispatch = useDispatch()
  

  const availableOptions = [4, 8, 12, 16, 20]
  const handlePokePerPages = (option) => {
    dispatch(setPokePerPageGlobal(option))
    
  }


  return (
    <article className='c-config'>
      <section className='config-card'>
        <h1 className='config-card__title'>Configuración</h1>
        <ul className='config-card__list'>
          <li className='config-card__item'>
            <span className='config-card__title-option'>Pokemons</span>
            <SelectPokesPerPage
              availableOptions={availableOptions}
              handlePokePerPages={handlePokePerPages}
              pokePerPage={pokePerPage}
            />
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Config