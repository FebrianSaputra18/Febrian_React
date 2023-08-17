import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/Images/mugiwara.png";
import "./header.css";
const navLink = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "profile",
    display: "Profile",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="navWrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1>Mugi - MugiWaras</h1>
            </div>
            <div className="navigation">
              <ul className="menu">
                {navLink.map((item, index) => (
                  <li className="navItem" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navIcons">
              <span className="favIcon">
                <i className="ri-bard-fill"></i>
                <span className="badge">1</span>
              </span>
              <span className="cartIcon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge"></span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={logo}
                  alt="logo"
                />
              </span>
            </div>

            <div className="menuMobile">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
