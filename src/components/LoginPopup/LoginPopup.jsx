import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

// eslint-disable-next-line react/prop-types
function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use $ privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign Up")}>
            Create a new account? <span>Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Already have and account?<span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
