import React from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginContext } from "../../App";
import { signInWithGoogle } from "./FirebaseAuth";

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
    <div className="p-5 m-5">
      <h1>login</h1>
      <button onClick={handleGoogleSignIn} className="btn btn-warning">
        continue with google
      </button>
    </div>
  );
};

export default Login;
