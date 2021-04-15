import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { LoginContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
