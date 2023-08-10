import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInputButton from '../components/FormInputButton';
import { configOpened } from '../store/slices/configOpen.slice';
import { setTrainerGlobal } from '../store/slices/trainer.slice';
import './styles/Home.css';

const Home = () => {
  const { trainer } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedValue = e.target.trainer.value.trim();
    if (trimmedValue) {
      dispatch(setTrainerGlobal(trimmedValue));
      e.target.trainer.value = '';
      navigate('pokedex');
    }
  };

  const handleConfig = () => {
    navigate('config');
    dispatch(configOpened());
  };

  return (
    <article className='c-home'>
      <img src="img/Home/pokedex.png" alt="Pokedex" className='home__title' />
      <section className='home__body'>
        <h1 className='home__greeting'>¡Hola entrenador!</h1>
        <p className='home__petition'>😊Para poder comenzar, dame tu nombre😊</p>
      </section>
      <FormInputButton
        handleSubmit={handleSubmit}
        id='trainer'
        placeholder='Tu nombre...'
        textButton='Start'
        value={trainer}
        modifierMainContainer='c-form--home'
      />
      <footer className='home-footer'>
        <div className="home-footer__red-container" />
        <div className="home-footer__black-container">
          <div className="home-footer__circle">
            <div className="home-footer__inner-circle"onClick={handleConfig}>
              <div className="home-footer__config" >
              
              </div>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Home;