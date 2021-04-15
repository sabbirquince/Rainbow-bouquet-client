import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { createContext } from "react";
import { useState } from "react";
import User from "./Components/User/User";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <div className="app">
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <Router>
          <Navigation />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/users"></Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/user">
              <User />
            </PrivateRoute>
          </Switch>

          <Footer />
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
