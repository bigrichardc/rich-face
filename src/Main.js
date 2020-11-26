import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Callback from './Callback';
import Console from './Console';
import Auth from './auth/Auth';
import A11yMessage from './components/A11yMessage';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

const Main = (props) => {
  const [auth] = useState(new Auth(props.history));
  const { isAuthenticated } = auth;
  console.log(auth.auth0);
  console.log(isAuthenticated());

  return (
    <div>
      <A11yMessage />
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {isAuthenticated() && (
            <li>
              <NavLink to="/console">Console</NavLink>
            </li>
          )}
          <li>
            {!isAuthenticated() && <LoginButton auth={auth} {...props} />}
            {isAuthenticated() && <LogoutButton auth={auth} {...props} />}
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/about" component={About} />
          <Route path="/console" render={(props) => <Console auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
        </div>
      </div>
    </div>
  );
};

export default Main;
