import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create New Account</h2>
        <form onSubmit="">
          <input type="email" name="email" placeholder="Your Email" id="" />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            id=""
          />
          <input
            type="password"
            name="password"
            placeholder="Re-enter Your Password"
            id=""
          />
          <input type="submit" value="Login" />
          <p>
            Already have an account? <Link to="/login">Sign-in</Link>
          </p>
          <p>------------or-----------</p>
          <button className="btn-regular">Google SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
