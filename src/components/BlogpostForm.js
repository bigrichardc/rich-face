import React from 'react';
import { connect } from 'react-redux';
import { addBlogpost } from '../thunks/thunks';
import '../css/BlogpostForm.css';

class BlogpostForm extends React.Component {
  state = {
    newBlogpostTitle: '',
    newBlogpost: '',
  };

  newBlogpost = (e) => {
    this.setState({ newBlogpost: e.target.value });
  };
  newBlogpostTitle = (e) => {
    this.setState({ newBlogpostTitle: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();

    const newBlogpostDate = new Date(Date.now()).toLocaleDateString();
    const newBlogpost = {
      posttitle: this.state.newBlogpostTitle,
      username: 'Richard',
      posttext: this.state.newBlogpost,
      postimage: '',
    };

    console.log(newBlogpost);
    this.props.onCreatePressed(newBlogpost);
    this.setState({
      newBlogpostTitle: '',
      newBlogpost: '',
    });
  };

  render() {
    return (
      <div className="blogpost-form__container">
        <form onSubmit={this.submit}>
          <input
            type="text"
            id="blogpostTitle"
            onChange={this.newBlogpostTitle}
            value={this.state.newBlogpostTitle}
          />
          <textarea
            id="blogpostInput"
            placeholder="Enter your thoughts..."
            onChange={this.newBlogpost}
            value={this.state.newBlogpost}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (newBlogpost) => {
    dispatch(addBlogpost(newBlogpost));
  },
});

export default connect(null, mapDispatchToProps)(BlogpostForm);
