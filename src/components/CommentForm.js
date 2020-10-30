import React from 'react';
import { connect } from 'react-redux';
import '../css/CommentForm.css';
import Comment from './Comment';
import { addPostComment } from '../thunks/thunks';
class CommentForm extends React.Component {
  componentDidMount() {
    //this.props.onCreatePressed();
  }

  state = {
    textValue: '',
  };

  newComment = (e) => {
    this.setState({ newComment: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();

    const newCommentDate = new Date(Date.now()).toLocaleDateString();

    const newComment = {
      postid: this.props.postId,
      commentauthor: 'Mr Anon',
      commenttext: this.state.newComment,
      commentdate: newCommentDate,
    };
    this.props.onCreatePressed(newComment);
    this.setState({
      newComment: '',
    });
  };

  render() {
    return (
      <div className="comment-form__container">
        <div className="comments__container">
          <h3>Comments</h3>
          {this.props.commentList
            .filter((comment) => comment.postid == this.props.postId)
            .map((comment, id) => (
              <Comment
                postId={this.props.postid}
                postAuthor={comment.commentauthor}
                postContent={comment.commenttext}
              />
            ))}
        </div>
        <div className="comment-form__form">
          <form onSubmit={this.submit}>
            <textarea
              id="commentInput"
              className="comment-form__textarea"
              placeholder="Please writer an essay about your favorite thing."
              onChange={this.newComment}
              value={this.state.newComment}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  commentList: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (newComment) => {
    dispatch(addPostComment(newComment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
