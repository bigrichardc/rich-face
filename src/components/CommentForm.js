import React from 'react';
import { connect } from 'react-redux';
import '../css/CommentForm.css';
import Comment from './Comment';

class CommentForm extends React.Component {
  componentDidMount() {
    //add dispatch functions here like so
    //this.props.startLoadingComments();
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
                postContent={comment.commentext}
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

const mapStateToProps = (state) => ({
  commentList: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  // add dispatchEvents here like -- startLoadingComments: () => dispatch(loadComments),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
