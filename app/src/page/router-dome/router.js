import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./main.js";
import About from "./about.js";
import Topic from "./topic.js";
import Home from "./home";
import NoMatch from "./NoMatch";
import Info from "./info"

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route path="/main/a" component={About}></Route>
                </Main>
              )}
            ></Route>
            <Route path="/about" render={() => (
              <About>
                <Route path="/about/:id&:foo" component={Info}></Route>
              </About>
            )}></Route>
            <Route path="/topic" component={Topic}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}
