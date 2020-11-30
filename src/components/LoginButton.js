import React from 'react';
import '../css/LoginButton.css';

const LoginButton = (props) => {
  const { login } = props.auth;

  return <a onClick={login}>Log In</a>;
};

export default LoginButton;
