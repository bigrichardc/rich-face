import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BlogpostForm from './components/BlogpostForm';
import BlogpostList from './components/BlogpostList';
import { setA11yMessage } from './actions/actions';

const Console = (props) => {
  const { setAria } = props;
  const { getProfile, isAuthenticated, login } = props.auth;
  const [state, setState] = useState({
    profile: null,
    error: '',
  });
  const { profile, error } = state;

  useEffect(() => {
    setAria('Navigated to console page');
    getProfile((profile, error) => setState({ profile, error }));
  }, []);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (!profile) return null;

  if (!isAuthenticated()) {
    return (
      <div>
        <h1>Log in to access console</h1>
        <button onClick={login}>Log in</button>
      </div>
    );
  }

  const roles = profile['https://localhost:3000/roles'];

  if (roles.indexOf('admin') === -1) {
    return (
      <div>
        <h1>You do not have administator rights</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Profile</h1>
      <p>{profile.name}</p>
      <img src={profile.picture} />
      <pre>{JSON.stringify(profile, null, 2)}</pre>

      <BlogpostForm auth={props.auth} {...props} />
      <BlogpostList />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(Console);
