import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="app">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
