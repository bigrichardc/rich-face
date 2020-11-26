import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BlogpostForm from './components/BlogpostForm';
import BlogpostList from './components/BlogpostList';
import { setA11yMessage } from './actions/actions';
//import { useAuth0 } from '@auth0/auth0-react';

const Console = (props) => {
  const { setAria } = props;
  const { login, isAuthenticated } = props.auth;
  //const { isAuthenticated } = props;
  //const { user, isAuthenticated, error, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  useEffect(() => {
    setAria('Navigated to console page');
    console.log(isAuthenticated());
  }, []);

  //if (error) {
  //return <div>Oops... {error.message}</div>;
  //}

  if (!isAuthenticated()) {
    return (
      <div>
        <h1>Log in to access console</h1>
        <button onClick={login}>Log in</button>
      </div>
    );
  }

  return (
    //isAuthenticated &&
    <div>
      <h1>Hello user.name</h1>
      <BlogpostForm />
      <BlogpostList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(Console);
