import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogpostForm from './components/BlogpostForm';
import BlogpostList from './components/BlogpostList';
import { setA11yMessage } from './actions/actions';

class Console extends Component {
  componentDidMount() {
    this.props.setAria('Navigated to console page');
  }
  render() {
    return (
      <div>
        <BlogpostForm />
        <BlogpostList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAria: (message) => {
    dispatch(setA11yMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(Console);
