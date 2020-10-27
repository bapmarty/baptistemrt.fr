import React from 'react';

import "../assets/scss/layouts/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="text">
          <p className="made">
            Made with <span role="img" aria-label="heart">❤️</span> by Baptiste Martin
            <span className="point">&#183;</span> 
            <a href="https://cv.baptistemrt.fr">PDF Version</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;