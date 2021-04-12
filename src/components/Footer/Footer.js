import React from "react";
import "./Footer.css";
import { Button } from "../Navbar/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Dirbame visoje Lietuvoje:
        </p>
        <p className='footer-subscription-text'>
konkurencinga kaina
naudodami profesionalią įrangą
greitai ir švariai, be dulkių ir triukšmo
tiksliai, be kalimo ir jokių įtrūkimų.
Iš užsakovų laukiame:
3,5 kw elektros galios užtikrinimo 50 metrų atstumu iki gręžimo vietos;
pažymėtų gręžiamų angų centrų; 
atsakomybės, kad numatytoje gręžimo vietoje nebus pragręžtos komunikacijos ir nebus pakenkta pastato konstrukcijai;
sklandaus atiskaitymo už suteiktas paslaugas.
        </p>

      </section> */}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-contact-item">
            <h2>Kontaktai</h2>
            <div>
              Paulius:{" "}
              <a className="phone_email" href="tel:+37067311326">
                +37067311326
              </a>
            </div>
            <div>
              Deimantas:{" "}
              <a className="phone_email" href="tel:+37067474129">
                +37067474129
              </a>
            </div>
          </div>
          <div className="footer-contact-item">
            <h2>El-paštas</h2>
            {/* <div>info@grezejai.lt</div> */}
            <a className="phone_email" href="mailto: info@grezejai.lt">
              info@grezejai.lt
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">GREZEJAI.LT © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="//facebook.com/DeimantasPaulius"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>

            {/* <Link
              class="social-icon-link gmail"
              to="mailto: vadim.sverbinenko@gmail.com"
              target="_blank"
              aria-label="gmail"
            >
              <i class="far fa-envelope" />
            </Link> */}

            <a
              class="phone_email social-icon-link gmail"
              href="mailto: info@grezejai.lt"
            >
              <i class="far fa-envelope" />
            </a>

            <Link
              class="social-icon-link twitter"
              to="//linkedin.com/in/vadim-sverbinenko-8475b619b"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
