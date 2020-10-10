import React from 'react';
import '../css/CommentForm.css';

const Comment = ({ postId, postAuthor, postContent }) => {
  return (
    <div className="comment">
      <div className="comment__text">
        {postContent}
        <span>{postAuthor}</span>
      </div>
    </div>
  );
};

export default Comment;
