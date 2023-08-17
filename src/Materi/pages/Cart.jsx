import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import "../Styles/cart.css";
import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { brown } from "@mui/material/colors";
const Cart = () => {
  let { id } = useParams();
  const item = products.find((product) => product.id === id);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <>
      <section>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="img" src={item.imgUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" gutterBottom>
                    {item.kategori}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.spesifikasi}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer", backgroundColor: brown }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Rp.{item.harga}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </section>
      {/* <section>
      <div className="container">
        <div className="cartRow">
          <div className="cartImg">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="img"
            />
          </div>
          <div className="col">
            <div className="detail">
              <p>Detail</p>
            </div>
            <div className="des">
              <div className="bin">
                <div className="viewDesc">
                  <p>Name : {item.productName}</p>
                  <p>Category : {item.kategori}</p>
                </div>
              </div>
              <div className="viewPrice">
                <p>Harga : {item.harga}</p>
              </div>
              <div className="action">
                <div className="cartTot">
                  <p>Total : {item.harga}</p>
                </div>
                <div className="cartBtn">
                  <button className="btnDelete">Delete</button>
                  <button className="btnPayment">Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default Cart;
