import React from 'react';

import "../assets/scss/layouts/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="text">
          <p className="made">
            Made with ❤️ by Baptiste Martin
            <span>&#183;</span> 
          <a href="https://cv.baptistemrt.fr">PDF Version</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;