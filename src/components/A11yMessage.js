import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setA11yMessage } from '../actions/actions';

class A11yMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentA11yMessage: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    //We delay the setting and clearing of the accessible route transition
    //text to ensure that the screen readers don't miss it.
    console.log(nextProps);
    if (nextProps.a11yMessage) {
      setTimeout(() => {
        this.setState({
          currentA11yMessage: nextProps.a11yMessage,
        });
      }, 50);
      setTimeout(() => {
        this.setState({
          currentA11yMessage: '',
        });
      }, 500);
    }
  }

  render() {
    const { currentA11yMessage } = this.state;
    console.log(this.props);
    return (
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {currentA11yMessage ? <span>{currentA11yMessage}</span> : ''}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

const mapStateToA11yProps = (state) => ({
  a11yMessage: state.a11yMessage,
});

export default connect(mapStateToA11yProps, mapDispatchToProps)(A11yMessage);
