import React from "react";
import "../../App.css";
import { Button } from "../Navbar/Button";
import { Link } from "react-router-dom";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="hero-container">
      <div className="header">
        <div>
          <ul>
            <h2 className="">Dirbame:</h2>
            <li>konkurencinga kaina</li>
            <li>greitai ir švariai, be dulkių ir triukšmo</li>
            <li>tiksliai, be kalimo ir jokių įtrūkimų</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Iš užsakovų laukiame:</h3>
            <li>
              3,5 kw elektros galios užtikrinimo 50 metrų atstumu iki gręžimo
              vietos
            </li>
            <li>pažymėtų gręžiamų angų centrų</li>
            <li>
              atsakomybės, kad numatytoje gręžimo vietoje nebus pragręžtos
              komunikacijos ir nebus pakenkta pastato konstrukcijai
            </li>
            <li>sklandaus atsiskaitymo už suteiktas paslaugas</li>
          </ul>
        </div>
      </div>
      <div className="btnss hero-btns ">
        <Link to="/services">Kainynas</Link>
        {/* import { Link } from 'react-router-dom' */}
      </div>
      {/* <div className='hero-btns'>
      <Link to='/services' >
          <i class='fab fa-chrome' />
            &nbsp;GREZEJAI.LT
          </Link>
          </div>
          <Link to="/services">About</Link> */}
    </div>
  );
}

export default MainSection;
