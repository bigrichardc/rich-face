import React from 'react';
import '../css/CommentForm.css';
import Comment from './Comment';
import { comments } from '../data/mockdata.js';

let commentList = comments.COMMENTS;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    var comments = commentList.filter((comment) => comment.postId === this.props.postId);
    this.state = {
      commentsList: comments,
    };
  }

  state = {
    textValue: '',
  };

  newComment = (e) => {
    console.log('this appened');
    this.setState({ textValue: e.target.value });
  };

  submit = (e) => {
    console.log(this.state.textValue);
    e.preventDefault();
  };

  CommentForm() {}

  render() {
    return (
      <div className="comment-form__container">
        <div className="comments__container">
          <h3>Comments</h3>
          {this.state.commentsList.map((comment, id) => (
            <Comment
              postId={this.props.postId}
              postAuthor={comment.commentAuthor}
              postContent={comment.commentText}
            />
          ))}
        </div>
        <div className="comment-form__form">
          <form onSubmit={this.submit}>
            <textarea
              className="comment-form__textarea"
              placeholder="Please writer an essay about your favorite thing."
              onChange={this.newComment}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
