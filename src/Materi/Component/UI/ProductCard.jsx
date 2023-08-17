import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../Styles/product.css";

const ProductCard = ({item}) => {

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
    </div>
  );
}
export default ProductCard;
