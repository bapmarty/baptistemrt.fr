import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Footer from './Footer';

import Bapmarti from "../assets/images/42bapmarti.png";

import "../assets/scss/layouts/Navbar.scss";

const Navbar = () => {
  return (
    <div className={"left-side"}>
      <div className="header">
        <img src={Bapmarti} alt={"42bapmarti 2019"}/>
        <div>
          <h2>BAPTISTE</h2>
          <h3>MARTIN</h3>
          <p>Né le 22 août 2000, à Châteauroux (36)</p>
        </div>
      </div>
      <div className="contact-block">
        <header>
          <h4>CONTACT</h4>
        </header>
        <section>
          <ul>
            <li><div className="icon-contact"><FontAwesomeIcon icon={faPhoneAlt} /></div><div><span>06-66-15-85-21</span></div></li>
            <li><div className="icon-contact"><FontAwesomeIcon icon={faEnvelope} /></div><div><a href="mailto:contact@baptistemrt.fr">contact@baptistemrt.fr</a></div></li>
            <li><div className="icon-contact"><FontAwesomeIcon icon={faMapMarkerAlt} /></div><div><a href="https://www.google.fr/maps/place/51+Rue+Rodier,+75009+Paris/@48.8805808,2.3415458,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e419d9cad5f:0xb5904a7820e3cc6c!8m2!3d48.8805773!4d2.3437345">51 rue Rodier, 75009 Paris</a></div></li>
          </ul>
          <ul className="socials">
            <li><div className="icon-contact"><FontAwesomeIcon icon={faGithub} /></div><div><a href="https://github.com/baptistemrt">baptistemrt</a></div></li>
            <li><div className="icon-contact"><FontAwesomeIcon icon={faLinkedin} /></div><div><a href="https://linkedin.com/in/baptiste-mrt">baptiste-mrt</a></div></li>
            <li><div className="icon-contact"><FontAwesomeIcon icon={faInstagram} /></div><div><a href="https://instagram.com/baptistemrrt">baptistemrrt</a></div></li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
