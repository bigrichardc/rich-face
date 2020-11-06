import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SocialCards from './components/SocialCards';
import { setA11yMessage } from './actions/actions';

class Home extends Component {
  componentDidMount() {
    this.props.setAria('Navigated to home page');
  }
  render() {
    return <SocialCards />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(Home);
