import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import About from "./components/pages/About";
import Reddit from "./components/projects/reddit/RedditApp.js";
// import RedditAbout from "./components/projects/reddit/RedditApp.js";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/reddit/home" component={Reddit} />
            {/* <Route exact path="/reddit/about" component={RedditAbout} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
