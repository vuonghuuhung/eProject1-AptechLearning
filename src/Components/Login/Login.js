import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./login.scss";
import { USER_LOGIN } from "../../store/actions/constants";
import { userFetch } from "../../store/actions/userAction";
import logo from "../../assets/img/logo.png";

function Login({ user, userFetch }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isLoggedIn) navigate("/");
    return () => {};
  });
  const handleInputChange = (e, type) => {
    switch (type) {
      case "userEmail":
        setUserEmail(e.target.value);
        break;
      case "userPassword":
        setUserPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    if (userEmail === "" || userPassword === "") {
      setErrorMessage("Please fill out the field");
    } else {
      let loginUser = {
        type: USER_LOGIN,
        info: {
          userEmail: userEmail,
          userPassword: userPassword,
        },
      };
      userFetch(loginUser);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div className="login">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
          <h1>Login</h1>
        </div>
        <div className="input-section">
          <p className="input-heading">Email</p>
          <div className="input-div">
            <input
              value={userEmail}
              onChange={(e) => handleInputChange(e, "userEmail")}
              type="email"
              placeholder="Email...."
            />
          </div>
        </div>
        <div className="input-section">
          <p className="input-heading">Password</p>
          <div className="input-div">
            <input
              value={userPassword}
              onChange={(e) => handleInputChange(e, "userPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="Password..."
            />
            <i
              className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
              onClick={handleShowPassword}
            ></i>
          </div>
        </div>
        <div className="error-message">
          <p>{errorMessage || user.error}</p>
        </div>
        <div className="forgot-password">
          <a>Forgot password?</a>
        </div>
        <div className="button-section">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="new-account">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p>
            Don't have an account? <Link to="/SignUp">Click here!</Link>
          </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
