import React, { useState, useEffect } from "react";
import "../../App.css";
import transperent from "../../img/images/transperent.png";
import { Link } from "react-router-dom";

function SignUp() {
  let changing = window.innerWidth <= 960 ? "sizing" : "sizing1";

  return (
    <div className="sign-up">
      <div>
        <img className="contacts-img2" src={transperent} alt="Logo" />
      </div>
      <div className={changing}>
        <ul>
          <li>
            <div>
              Paulius:{" "}
              <a className="phone_email" href="tel:+37067311326">
                +37067311326
              </a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              Deimantas:{" "}
              <a className="phone_email" href="tel:+37067474129">
                +37067474129
              </a>
            </div>
          </li>
          <li>
            <a className="phone_email" href="mailto: info@grezejai.lt">
              El. paštas: info@grezejai.lt
            </a>
          </li>
          <li>
            <Link
              class="phone_email facebook"
              to="//facebook.com/DeimantasPaulius"
              target="_blank"
              aria-label="Facebook"
            >
              FB: facebook.com/DeimantasPaulius
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SignUp;
