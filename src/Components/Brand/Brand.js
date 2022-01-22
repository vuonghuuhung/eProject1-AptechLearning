import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import "./brand.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Brand({ product }) {
  let params = useParams();
  const [filterPrice, setFilterPrice] = useState(0);
  const [filterBrand, setFilterBrand] = useState(
    params.brand ? [params.brand] : []
  );
  useEffect(() => {
    setFilterBrand([params.brand]);
  }, [params.brand]);
  const handlePriceSelect = (e) => {
    setFilterPrice(parseInt(e.target.value));
  };
  const handleBrandSelect = (brand) => {
    if (filterBrand.includes(brand)) {
      setFilterBrand((prev) => {
        console.log(typeof prev);
        let returnBrand = prev.filter((item) => item !== brand);
        console.log(returnBrand);
        return returnBrand;
      });
    } else {
      setFilterBrand((prev) => [...prev, brand]);
    }
  };
  const productFilter = (item) => {
    if (filterBrand.length !== 0) {
      switch (filterPrice) {
        case 0:
          return filterBrand.includes(item.brandName.toLowerCase());
        case 5:
          return (
            filterBrand.includes(item.brandName.toLowerCase()) &&
            parseInt(item.prodPrice) < 500000
          );
        case 15:
          return (
            filterBrand.includes(item.brandName.toLowerCase()) &&
            parseInt(item.prodPrice) > 500000 &&
            parseInt(item.prodPrice) < 1500000
          );
        case 25:
          return (
            filterBrand.includes(item.brandName.toLowerCase()) &&
            parseInt(item.prodPrice) > 1500000 &&
            parseInt(item.prodPrice) < 2500000
          );
        default:
          return item;
      }
    } else {
      switch (filterPrice) {
        case 0:
          return item;
        case 5:
          return item.prodPrice <= 500000;
        case 15:
          return (
            parseInt(item.prodPrice) > 500000 &&
            parseInt(item.prodPrice) <= 1500000
          );
        case 25:
          return (
            parseInt(item.prodPrice) > 1500000 &&
            parseInt(item.prodPrice) <= 2500000
          );
        default:
          return item;
      }
    }
  };
  console.log(filterBrand);
  return (
    <div>
      <Header />
      <div className="bread-crumb">
        <div>
          <span className="homepage">Home page</span> <span>/ </span>
          <span className="brand">Brand</span>
        </div>
      </div>
      <div className="brand-div">
        <div className="filter-by">
          <div className="filter-by-price">
            <select
              className="order-by-price"
              onChange={(e) => handlePriceSelect(e)}
            >
              <option value="0">filter by price</option>
              <option value="5">0 - 500.000</option>
              <option value="15">500.000 - 1.500.000</option>
              <option value="25">1.500.0000 - 2.500.000</option>
            </select>
          </div>
          <div className="filter-by-brand">
            <h2 className="fb-title">Brand</h2>
            <div className="fb-list">
              <label className="fb-container">
                <input
                  type="checkbox"
                  checked={filterBrand.includes("adidas")}
                  onChange={() => handleBrandSelect("adidas")}
                />
                <span>Adidas</span>
                <div className="check-mark"></div>
              </label>
              <label className="fb-container">
                <input
                  type="checkbox"
                  checked={filterBrand.includes("nike")}
                  onChange={() => handleBrandSelect("nike")}
                />
                <span>Nike</span>
                <div className="check-mark"></div>
              </label>
              <label className="fb-container">
                <input
                  type="checkbox"
                  checked={filterBrand.includes("gucci")}
                  onChange={() => handleBrandSelect("gucci")}
                />
                <span>Gucci</span>
                <div className="check-mark"></div>
              </label>
              <label className="fb-container">
                <input
                  type="checkbox"
                  checked={filterBrand.includes("reebok")}
                  onChange={() => handleBrandSelect("reebok")}
                />
                <span>Reebok</span>
                <div className="check-mark"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="products">
          {product.productData &&
            product.productData.data.filter(productFilter).map((item) => {
              return (
                <div className="avail-item" key={item.prodID}>
                  <div className="item-border">
                    <a>
                      <div className="img-border">
                        <img
                          className="item-image"
                          src={item.prodImg}
                          alt="item-des"
                        />
                      </div>
                    </a>
                    <div className="item-des">
                      <p className="item-name">{item.prodName}</p>
                      <p className="item-price">{item.prodPrice} đ</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps)(Brand);
