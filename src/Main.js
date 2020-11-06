import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Console from './Console';
import A11yMessage from './components/A11yMessage';

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/console">Console</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/console" component={Console} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Main;
