import React from "react";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-item">
          <div className="border-heading">
            <span className="item-heading">Contact us</span>
          </div>
          <p className="item-des">
            Công ty cổ phần EGO Sport là một công ty cổ đông thuộc sở hữu của
            EGO Creative với vai trò là nhà cung cấp các phụ kiện thời trang thể
            thao đến với khách hàng khắp mọi miền tổ quốc.
          </p>
          <div className="item-list">
            <div className="item-list__detail">
              <i className="fas fa-map-marker"></i>
              <span className="footer-word">
                Address: 435 Âu Cơ, Liên Chiểu, Đà Nẵng
              </span>
            </div>
            <div className="item-list__detail">
              <i className="fas fa-mobile"></i>
              <span className="footer-word">Hotline: (+84) 905 692 314</span>
            </div>
            <div className="item-list__detail">
              <i className="fas fa-envelope"></i>
              <span className="footer-word">Email: giaydep@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-item">
          <div className="border-heading">
            <span className="item-heading">Policy</span>
          </div>
          <div className="item-list">
            <div className="item-list__detail">
              <span>Hướng dẫn mua hàng</span>
            </div>
            <div className="item-list__detail">
              <span>Chính sách thanh toán</span>
            </div>
            <div className="item-list__detail">
              <span>Chính sách bảo hành</span>
            </div>
            <div className="item-list__detail">
              <span>Chính sách vận chuyển</span>
            </div>
          </div>
        </div>

        <div className="footer-item">
          <div className="border-heading">
            <span className="item-heading">Information</span>
          </div>
          <div className="item-list">
            <div className="item-list__detail">
              <span>About us</span>
            </div>
            <div className="item-list__detail">
              <span>Popular questions</span>
            </div>
            <div className="item-list__detail">
              <span>News</span>
            </div>
            <div className="item-list__detail">
              <span>Contact us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Powered by Group 6 - C2103L - LTN</p>
      </div>
    </div>
  );
}
