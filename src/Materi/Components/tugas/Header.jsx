import React from "react";
import "../Style.scss";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h3>Logo</h3>
          <h3>Components React JS</h3>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
