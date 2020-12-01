import React from 'react';

const LogoutButton = (props) => {
  const { logout } = props.auth;

  return <a onClick={logout}>Log Out</a>;
};

export default LogoutButton;
