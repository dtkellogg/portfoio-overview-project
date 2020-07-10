import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/redditPosts/Search";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import axios from "axios";
import RedditState from "./context/reddit/RedditState";

import "./RedditApp.css";

const App = () => {
  return (
    <RedditState>
      <RedditState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="reddit-container">
              <Switch>
                <Route exact path="/reddit/home" component={Home} />
                <Route exact path="/reddit/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </RedditState>
    </RedditState>
  );
};

export default App;
