import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import getProductFetch from "./store/actions/productAction";
import getBrandFetch from "./store/actions/brandAction";
import { Home, Login, SignUp, Brand, NotFound } from "./Components";

function App(props) {
  const { product, user, getProductFetch, getBrandFetch } = props;
  useEffect(() => {
    getProductFetch();
    getBrandFetch();
    return () => {};
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Brand/:brand" element={<Brand />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  product: state.product,
});
const mapDispatchToProps = (dispatch) => ({
  getProductFetch: () => dispatch(getProductFetch()),
  getBrandFetch: () => dispatch(getBrandFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
