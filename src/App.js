import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
