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
        <Route exact path="/" component={Articles} />
        <Route path="/awards" component={AwardsPage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/article/:slug"
          render={(props) => <ArticlePage {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
