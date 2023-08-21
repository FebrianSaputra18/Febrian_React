import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../assets/data/products";
import "../Styles/shop.css";
import { motion } from "framer-motion";

const Shop = () => {
  let { id } = useParams();
  const item = products.find((product) => product.id === id);

  const [state, setState] = useState(0);


  const handleMinus = () => {
    if (state > 0) {
      setState(state - 1);
      console.log(state);
    }
  };
  const handlePlus = () => {
    setState(state + 1);
    console.log(state);
  };
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="viewImg">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="img"
            />
          </div>
          <div className="bin">
            <div className="viewDesc">
              <h4>Name : {item.productName}</h4>
              <h4>Category : {item.kategori}</h4>
              <h4>Description : {item.spesifikasi}</h4>
            </div>
            <div className="viewPrice">
              <h4>Harga : {item.harga}</h4>
              <div className="productCard-bottom">
                <div className="qty">
                  <button className="btnHandlem" onClick={() => handleMinus()}>
                    -
                  </button>
                  <div className="quality">{state}</div>
                  <button className="btnHandlep" onClick={() => handlePlus()}>
                    +
                  </button>
                </div>
              </div>
              <div className="bin">
                <Link to={`/Cart`} state={{ from: "occupation" }}>
                  <button className="btn">Buy</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
