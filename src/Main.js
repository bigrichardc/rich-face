import React, { useState } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

  const alertTest = () => {
    var x = document.getElementById('richfaceTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  };

  return (
    <div>
      <A11yMessage />
      <img className="topimage" src="/Rich-Face-Logo-i--250.png" alt="" />
      <div className="topnav" id="richfaceTopnav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        {isAuthenticated() && <NavLink to="/console">Console</NavLink>}
        {!isAuthenticated() && <LoginButton auth={auth} {...props} />}
        {isAuthenticated() && <LogoutButton auth={auth} {...props} />}
        <a href="javascript:void(0);" className="icon">
          <FontAwesomeIcon icon={faBars} onClick={alertTest} />
        </a>
      </div>

      <div>
        <div className="content">
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/about" component={About} />
          <Route
            path="/console"
            render={(props) =>
              auth.isAuthenticated() ? <Console auth={auth} {...props} /> : <Redirect to="/" />
            }
          />
          <Route path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
        </div>
      </div>
    </div>
  );
};

export default Main;
