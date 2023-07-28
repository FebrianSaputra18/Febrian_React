import React from "react";
import "./footer.scss";
import topi  from '../../../Images/mugiwara.png'


const Footer = () => {
  return (
    <footer>
      <div className="list">
        <div className="log">
            <img src={topi} alt="mugi" />
            <h1>Mugi-MugiWaras</h1>
        </div>
        <div className="item1">
          <h3>Footer</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Setting</li>
          </ul>
        </div>
        <div className="item2">
          <h3>Footer</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Setting</li>
          </ul>
        </div>
        <div className="item3">
          <h3>Footer</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Setting</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
