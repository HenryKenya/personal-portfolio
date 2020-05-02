import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
