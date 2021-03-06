import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { SignInwithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleSignin = () => {
    SignInwithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login Here</h2>
        <form>
          <input type="email" name="email" placeholder="Your Email" id="" />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            id=""
          />
          <input type="submit" value="Login" />
          <p>
            New to Ema-John? <Link to="/register">Create Account</Link>{" "}
          </p>
        </form>
        <p>------------or-----------</p>
        <button className="btn-regular" onClick={handleGoogleSignin}>
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default Login;
