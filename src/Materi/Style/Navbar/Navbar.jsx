import React from "react";
import './navbar.scss'
const Navbar = () => {
  return (
    <header>
      <div className="header_content">
        <div className="header_logo">
          <a href="/">
            <h2>Mugi - MugiWaras</h2>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Product">Product</a>
            </li>
          </ul>
          <button>Daftar</button>
          <button>Login</button>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
