import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../Styles/product.css";
import { Button } from "bootstrap";

const [state, setState] = useState(0)

class ProductCard extends React.Component {

  state = {
    value: 0
  }
  
  handleMinus = () => {
    this.setState({ value: this.state.value - 1})
  }
  handlePlus = () => {
    this.setState({ value: this.state.value + 1})
  }
  render() {
    return (
      <div className="productItem">
        <div className="productImg">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 productInfo">
          <h3 className="producName">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.kategori}</span>
        </div>
        <div className="productCard-bottom">
          <span className="price">${item.harga}</span>
          <div className="qty">
            <Button onClick={this.handleMinus} >-</Button>
            <div className="quality">{this.state.value}</div>
            <Button onClick={this.handlePlus} >+</Button>
  
          </div>
        </div>
        <div className="btn">
          <button>Buy</button>
        </div>
      </div>
    );
  }
}
export default ProductCard;
