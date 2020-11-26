import React from 'react';

const LoginButton = (props) => {
  const { login } = props.auth;

  return <button onClick={login}>Log In</button>;
};

export default LoginButton;
