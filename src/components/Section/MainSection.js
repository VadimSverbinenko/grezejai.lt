import React from 'react';
import '../../App.css';
import { Button } from '../Navbar/Button';
import './MainSection.css';
// import logo from '../../img/images/hole.jpg';

function MainSection() {
  return (
    <div className='hero-container'>
      {/* <h1>Dirbame visoje Lietuvoje:</h1> */}
      <div className="header">
        <div>
        {/* <img src={logo} alt="Logo" /> */}
        <ul>
          
      <h2 className="">Dirbame:</h2>
      {/* <div className='hero-btns'>
        <Button
          to='/services'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Kainynas
        </Button>
      </div> */}
          <li>konkurencinga kaina</li>
          <li>greitai ir švariai, be dulkių ir triukšmo</li>
          <li>tiksliai, be kalimo ir jokių įtrūkimų</li>
        </ul>
        </div>
        <div>
        <ul>
          
      <h3>Iš užsakovų laukiame:</h3>
          <li>3,5 kw elektros galios užtikrinimo 50 metrų atstumu iki gręžimo vietos</li>
          <li>pažymėtų gręžiamų angų centrų</li>
          <li>atsakomybės, kad numatytoje gręžimo vietoje nebus pragręžtos komunikacijos ir nebus pakenkta pastato konstrukcijai</li>
          <li>sklandaus atsiskaitymo už suteiktas paslaugas</li>
        </ul>
        </div>
      </div>
      <div className='hero-btns'>
        <Button
          to='/services'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Kainynas
        </Button>
      </div>
    </div>
  );
}

export default MainSection;