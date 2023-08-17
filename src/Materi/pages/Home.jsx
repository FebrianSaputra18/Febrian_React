import React, { useEffect, useState } from "react";
import Helmet from "../Component/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mugiwara from "../assets/Images/mugiwara.png";
import "../Styles/home.css";
import ProductList from "../Component/UI/ProductList";
import products from "../assets/data/products.js";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.kategori === "buah"
    );

    setTrendingProduct(filteredTrendingProducts);
  }, []);
  return (
    <div>
      <Helmet title={"Home"}>
        <section className="viewSection">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="viewContent">
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    className="viewMugiwara"
                    src={mugiwara}
                    alt="topi"
                  />
                  <h1>Let's Join My Nakama</h1>
                  <div className="feat">
                    <Link to="/Shop">
                      <button className="btnHome">Shop</button>
                    </Link>
                    <Link to="/Cart">
                      <button className="btnHome">Cart</button>
                    </Link>
                    <Link to="/History">
                      <button className="btnHome">History</button>
                    </Link>
                  </div>
                  <div className="ket">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Porro aliquid tempora similique laborum odit unde officia
                      natus consequuntur explicabo aliquam ea dicta neque
                      recusandae, ipsum velit impedit modi qui voluptas deleniti
                      molestias voluptates ratione, facilis ullam reprehenderit?
                      Debitis, quas ad!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="viewProduct">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="sectionTitle">Trending Products</h2>
              </Col>
              <div className="cardContent">
                <ProductList data={trendingProduct} />
              </div>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Home;
