import React from "react";
import { Link } from "react-router-dom";

export default function ProductShow({ title, data }) {
  return (
    <div>
      <div className="available">
        <div className="section">
          <span>{title}</span>
        </div>
        <div className="available-product">
          {data.map((item) => (
            <div className="avail-item" key={item.prodID}>
              <div className="item-border">
                <Link to="/">
                  <div className="img-border">
                    <img
                      className="item-image"
                      src={item.prodImg}
                      alt="item-des"
                    />
                  </div>
                </Link>
                <div className="item-des">
                  <p href="#" className="item-des-content">
                    {item.prodName}
                  </p>
                  <p className="item-price">Price: {item.prodPrice}đ</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
