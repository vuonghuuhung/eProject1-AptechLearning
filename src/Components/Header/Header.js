import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.scss";
import logo from "../../assets/img/logo.png";
import { userLogout } from "../../store/actions/userAction";
function Header({ brand, user, logout }) {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header-logo" />
        </Link>
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item brand">
          <a>Brands</a>
          <i className=" fas fa-angle-down"></i>
          <div className="sub-nav ">
            <Link to="/brand/nike" className="bm-item">
              Nike
            </Link>
            <Link to="/brand/adidas" className="bm-item">
              Adidas
            </Link>
            <Link to="/brand/reebok" className="bm-item">
              Reebok
            </Link>
            <Link to="/brand/gucci" className="bm-item">
              Gucci
            </Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/">News</Link>
        </div>
        <div className="nav-item">
          <Link to="/">Contact us</Link>
        </div>
        <div className="nav-item">
          <Link to="/" className="icon fas fa-search"></Link>
          <Link to="/" className="icon fas fa-shopping-cart"></Link>

          {user.isLoggedIn ? (
            <>
              <span className="welcome">{user.userData.data.userName}</span>
              <span className="logout" onClick={() => logout()}>
                Log out
              </span>
            </>
          ) : (
            <Link to="/Login" className="icon fas fa-user"></Link>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userLogout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
