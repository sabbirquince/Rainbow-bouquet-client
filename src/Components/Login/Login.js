import React from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginContext } from "../../App";
import { signInWithGoogle } from "./FirebaseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./login.css";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        setLoggedIn(user);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" login">
      <div>
        <h1>Login</h1>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-warning py-2 px-5 mt-3"
        >
          <FontAwesomeIcon icon={faGoogle} /> continue with google
        </button>
        <small className="py-3">You must login to get our services</small>
      </div>
    </div>
  );
};

export default Login;
