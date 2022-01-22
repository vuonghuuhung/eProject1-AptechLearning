import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./home.scss";
import Header from "../Header/Header";
import Slider from "./Slider";
import ProductShow from "./ProductShow";
import Footer from "../Footer/Footer";
import { icon1, icon2, icon3, icon4, newImg } from "../../assets";

function Home({ product }) {
  return (
    <div className="home">
      <Header />
      <Slider />
      <div className="support">
        <div className="support-item">
          <img src={icon1} alt="icon" className="support-icon" />
          <div className="support-content">
            <p className="support-name">Mua sắm an toàn</p>
            <p className="support-des">Bảo đảm an toàn khi mua</p>
          </div>
        </div>
        <div className="support-item">
          <img src={icon2} alt="icon" className="support-icon" />
          <div className="support-content">
            <p className="support-name">Hỗ trợ 24/7</p>
            <p className="support-des">Tư vấn trực tuyến</p>
          </div>
        </div>
        <div className="support-item">
          <img src={icon3} alt="icon" className="support-icon" />
          <div className="support-content">
            <p className="support-name">5 ngày hoàn trả</p>
            <p className="support-des">Đảm bảo hoàn tiền</p>
          </div>
        </div>
        <div className="support-item" style={{ paddingRight: 0 }}>
          <img src={icon4} alt="icon" className="support-icon" />
          <div className="support-content">
            <p className="support-name">Miễn phí giao hàng</p>
            <p className="support-des">Đơn hàng từ 600.000</p>
          </div>
        </div>
      </div>
      {product && (
        <ProductShow title={"New Arrived"} data={product.data.slice(-5)} />
      )}
      {product && (
        <ProductShow title={"Man Shoes"} data={product.data.slice(0, 5)} />
      )}
      {product && (
        <ProductShow title={"Woman Shoes"} data={product.data.slice(5, 10)} />
      )}
      <div className="news">
        <div className="section">
          <span>News</span>
        </div>
        <div className="news-item">
          <div className="news-list-item">
            <img className="news-photo" src={newImg} alt="giay" />
            <div className="news-content-container">
              <h3 className="news-title">
                Chọn giày dép lúc nào cũng vừa in chân
              </h3>
              <p className="news-date">22 Tháng Mười, 2019</p>
              <div className="line"></div>
              <p className="news-content">
                Mũi giày hay gót giày không bị biến dạng quá lâu khi bạn cầm lên
                và bóp nhẹ [...]
              </p>
            </div>
          </div>
          <div className="news-list-item">
            <img className="news-photo" src={newImg} alt="giay" />
            <div className="news-content-container">
              <h3 className="news-title">
                Chọn giày dép lúc nào cũng vừa in chân
              </h3>
              <p className="news-date">22 Tháng Mười, 2019</p>
              <div className="line"></div>
              <p className="news-content">
                Mũi giày hay gót giày không bị biến dạng quá lâu khi bạn cầm lên
                và bóp nhẹ [...]
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.product.productData,
});
export default connect(mapStateToProps)(Home);
