import auth0 from 'auth0-js';

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.requestedScopes = 'openid profile email read:courses';
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: 'token id_token',
      scope: this.requestedScopes,
    });
    console.log(process.env.REACT_APP_AUTH0_DOMAIN);
    console.log(process.env.REACT_APP_AUTH0_CLIENT_ID);
    console.log(process.env.REACT_APP_AUTH0_CALLBACK_URL);
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push('/');
      } else if (err) {
        this.history.push('/');
        alert(err.error);
        console.log(err);
      }
    });
  };

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(authResult.expiresIn + 360000 + new Date().getTime());

    //set scopes as the scopes from the user or the existing scopes
    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  };

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    this.userProfile = null;
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: 'http://localhost:3000',
    });
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  };

  getProfile = (callback) => {
    if (this.userProfile) return callback(this.userProfile);

    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) this.userProfile = profile;
      callback(profile, err);
    });
  };

  userHasScopes(scopes) {
    const grantedScopes = (JSON.parse(localStorage.getItem('scopes')) || '').split(' ');
    //iterates over scope array and returns true if each granted scope is in
    return scopes.every((scope) => grantedScopes.includes(scope));
  }
}
