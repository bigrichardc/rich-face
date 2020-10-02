import React from 'react';

class CommentForm extends React.Component {
    state = { 
        textValue: '' 
    }

    newComment = e => {
        console.log("this happened");
        this.setState({textValue: e.target.value});
      }

    submit = e => {
        console.log(this.state.textValue);
        e.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.submit}> 
            <label>Some text: <input type="text" onChange={this.newComment}></input></label>
            <button>Submit</button>
          </form>
          
        )
      }
    }

    export default CommentForm;