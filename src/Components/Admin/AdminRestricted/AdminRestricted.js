import React from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { LoginContext } from "../../../App";
import { signInWithGoogle } from "../../Login/FirebaseAuth";
import "./adminRestricted.css";

const AdminRestricted = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        adminCheck(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adminCheck = (user) => {
    fetch(
      `https://mighty-tundra-68939.herokuapp.com/adminCheck?email=${user.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const updateUser = { ...loggedIn, ...user };
          updateUser.role = "admin";
          setLoggedIn(updateUser);
          history.replace(from);
        } else {
          const updateUser = { ...loggedIn, ...user };
          updateUser.role = "user";
          setLoggedIn(updateUser);
          history.replace(from);
        }
      });
  };

  return (
    <div className="admin-restrict">
      <h3 className="mb-3">
        Warning: You have to be an admin to view this page!
      </h3>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline-warning px-5"
      >
        Login
      </button>
      <p className="mt-3">
        You may not see afterwards yet after login if you are not enlisted as an
        admin of this website
      </p>
    </div>
  );
};

export default AdminRestricted;
