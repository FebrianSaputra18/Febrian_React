import React from "react";
import Header from "./tugas/Header";
import Footer from "./tugas/Footer";
import Content from "./tugas/Content";
import './Style.scss';

class Components extends React.Component {

    render() {
      return (
        <div>
          <div className="container">
            <div className="containerFluid">
              <Header/>
              <Content/>
              <Footer/>
            </div>
          </div>
        </div>
      )
    }
}
export default Components;