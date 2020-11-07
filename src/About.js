import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setA11yMessage } from './actions/actions';

class About extends Component {
  componentDidMount() {
    this.props.setAria('Navigated to about page');
  }
  render() {
    return (
      <div>
        <h2>This is an about page</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(About);
