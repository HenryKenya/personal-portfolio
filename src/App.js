import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import { Switch, Route } from "react-router-dom";
import AwardsPage from "./components/awards-press/AwardsPage";
import Articles from "./components/articles/Articles";
import ArticlePage from "./components/articles/ArticlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/awards" component={AwardsPage} />
        <Route path="/articles" component={Articles} />
        <Route path="/article/:slug" component={ArticlePage} />
      </Switch>
    </div>
  );
}

export default App;
