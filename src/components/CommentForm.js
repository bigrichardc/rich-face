import React from 'react';
import '../css/CommentForm.css';

class CommentForm extends React.Component {
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
          <div className="comment">
            <span>Bah rubbish</span>
          </div>
          <div className="comment">
            <h4>Angry Anderson</h4>
            <span>Boo terrible</span>
          </div>
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
