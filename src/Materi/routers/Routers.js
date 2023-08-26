import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
// import Form from "../pages/Form";
import ValidationForm from "../Component/Validation/ValidationForm"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />} />
      <Route path="form" element={<ValidationForm/>} />
      <Route path="home" element={<Home />} />
      <Route path="cart/:id" element={<Cart />} />
      <Route path='shop/:id' element={<Shop />} />
    </Routes>
  );
};

export default Routers;
