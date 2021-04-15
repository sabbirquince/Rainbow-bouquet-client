import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { LoginContext } from "../../../App";

function AdminRoute({ children, ...rest }) {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn?.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/adminRestricted",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
