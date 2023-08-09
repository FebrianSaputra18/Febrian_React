import React from "react";
import Navbar from "../Navbar/Navbar";
import "./content.scss";
import Portofolio from "./Portofolio";
import Skill from "./Skill";
import topi  from '../../../Images/mugiwara.png'

const Home = () => {

 
  return (
    <body>
      <Navbar />
      <div className="container">
        <div className="title">
          <img src={topi} alt="topi" />
          <h1>Let's Join My Nakama</h1>
          <div className="feat">
            <button>Skill</button>
            <button>Portofolio</button>

            <button>Product</button>
          </div>
          <div className="ket">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              aliquid tempora similique laborum odit unde officia natus
              consequuntur explicabo aliquam ea dicta neque recusandae, ipsum
              velit impedit modi qui voluptas deleniti molestias voluptates
              ratione, facilis ullam reprehenderit? Debitis, quas ad!
            </p>
          </div>
        </div>
      </div>
      <Portofolio />
      <Skill />
      
    </body>
  );
};

export default Home;
