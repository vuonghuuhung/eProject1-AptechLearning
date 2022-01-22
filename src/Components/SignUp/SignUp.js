import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { userFetch } from "../../store/actions/userAction";
import { USER_CREATE } from "../../store/actions/constants";
import "../Login/login.scss";
import logo from "../../assets/img/logo.png";
function SignUp({ user, userFetch }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isLoggedIn) navigate("/");
    return () => {};
  });
  const [newUser, setNewUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userRePassword: "",
    userRole: "client",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    rePassword: false,
  });
  const handleInputChange = (e, type) => {
    switch (type) {
      case "userName":
        setNewUser({
          ...newUser,
          userName: e.target.value,
        });
        break;
      case "userEmail":
        setNewUser({
          ...newUser,
          userEmail: e.target.value,
        });
        break;
      case "userPassword":
        setNewUser({
          ...newUser,
          userPassword: e.target.value,
        });
        break;
      case "userRePassword":
        setNewUser({
          ...newUser,
          userRePassword: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleSignUp = () => {
    if (
      newUser.userName === "" ||
      newUser.userEmail === "" ||
      newUser.userPassword === "" ||
      newUser.userRePassword === "" ||
      newUser.userRole === ""
    ) {
      setErrorMessage("Please fill out all the field");
    } else if (newUser.userRePassword !== newUser.userPassword) {
      setErrorMessage("Password doesn't match");
    } else {
      setErrorMessage("");
      userFetch({
        type: USER_CREATE,
        info: newUser,
      });
    }
  };
  const handleShowPassword = (type) => {
    switch (type) {
      case "password":
        setShowPassword({
          ...showPassword,
          password: !showPassword.password,
        });
        break;
      case "rePassword":
        setShowPassword({
          ...showPassword,
          rePassword: !showPassword.rePassword,
        });
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="sign-up">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
          <h1>Sign Up</h1>
        </div>
        <div className="input-section">
          <p className="input-heading">Name</p>
          <div className="input-div">
            <input
              type="text"
              value={newUser.userName}
              onChange={(e) => handleInputChange(e, "userName")}
              placeholder="Name..."
            />
          </div>
        </div>
        <div className="input-section">
          <p className="input-heading">Email</p>
          <div className="input-div">
            <input
              type="email"
              value={newUser.userEmail}
              onChange={(e) => handleInputChange(e, "userEmail")}
              placeholder="Email..."
            />
          </div>
        </div>
        <div className="input-section">
          <p className="input-heading">Password</p>
          <div className="input-div">
            <input
              type={showPassword.password ? "text" : "password"}
              value={newUser.userPassword}
              onChange={(e) => handleInputChange(e, "userPassword")}
              placeholder="Re-password..."
            />
            <i
              className={
                showPassword.password ? "fas fa-eye" : "fas fa-eye-slash"
              }
              onClick={() => handleShowPassword("password")}
            ></i>
          </div>
        </div>
        <div className="input-section">
          <p className="input-heading">Re-password</p>
          <div className="input-div">
            <input
              type={showPassword.rePassword ? "text" : "password"}
              value={newUser.userRePassword}
              onChange={(e) => handleInputChange(e, "userRePassword")}
              placeholder="Re-password..."
            />
            <i
              className={
                showPassword.rePassword ? "fas fa-eye" : "fas fa-eye-slash"
              }
              onClick={() => handleShowPassword("rePassword")}
            ></i>
          </div>
        </div>
        <div className="error-message">
          <p>{errorMessage || user.error}</p>
        </div>
        <div className="button-section">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  userFetch: (user) => dispatch(userFetch(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
