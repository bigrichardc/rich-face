import React from 'react';
import { connect } from 'react-redux';
import { addBlogpost } from '../thunks/thunks';
import '../css/BlogpostForm.css';

class BlogpostForm extends React.Component {
  state = {
    newBlogpostTitle: '',
    newBlogpost: '',
    newBlogpostImageUrl: '',
  };

  newBlogpost = (e) => {
    this.setState({ newBlogpost: e.target.value });
  };
  newBlogpostTitle = (e) => {
    this.setState({ newBlogpostTitle: e.target.value });
  };

  newBlogpostImageUrl = (e) => {
    this.setState({ newBlogpostImageUrl: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();

    const newBlogpost = {
      posttitle: this.state.newBlogpostTitle,
      username: this.props.auth.userProfile.nickname,
      posttext: this.state.newBlogpost,
      postimage: this.state.newBlogpostImageUrl,
    };

    this.props.onCreatePressed(newBlogpost);
    this.setState({
      newBlogpostTitle: '',
      newBlogpost: '',
      newBlogpostImageUrl: '',
    });
  };

  render() {
    return (
      <div className="blogpost-form__container">
        <div className="blogpost-form__heading">
          <h2>Post</h2>
        </div>
        <div className="blogpost-form__style">
          <form onSubmit={this.submit}>
            <label for="blogpostTitle">Title</label>
            <input
              type="text"
              id="blogpostTitle"
              onChange={this.newBlogpostTitle}
              value={this.state.newBlogpostTitle}
            />
            <label for="blogpostContent">Give us an opinion</label>
            <textarea
              id="blogpostContent"
              placeholder="Enter your thoughts..."
              onChange={this.newBlogpost}
              value={this.state.newBlogpost}
            ></textarea>
            <label for="blogpostImageUrl">Image (url)</label>
            <input
              type="text"
              id="blogpostImageUrl"
              onChange={this.newBlogpostImageUrl}
              value={this.state.newBlogpostImageUrl}
            />
            <button>Submit</button>
          </form>
        </div>
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
