import React from 'react';
import '../css/SocialCard.css';
import CommentForm from '../components/CommentForm';

function PostImage({ image }) {
  if (!image) {
    return null;
  }
  return <img className="social-card__post-image" src={image} />;
}

const SocialCard = ({ postId, postTitle, postText, userName, postImage }) => {
  return (
    <div className="social-card">
      <h2 className="social-card__title">{postTitle}</h2>
      <p>12/06/1971 10.23pm</p>
      <div className="social-card__user-post">
        <div className="social-card__user-details">
          <img src="/src/data/avatar.png" className="social-card__avatar-image" />
          <h3 className="social-card__username">{userName}</h3>
        </div>
        <div className="social-card__user-post-details">
          <PostImage image={postImage} />
          <div>{postText}</div>
        </div>
      </div>
      <div className="social-card__comment-section">
        <CommentForm />
      </div>
    </div>
  );
};

const SocialCards = ({ postList }) => {
  return (
    <div className="social-card__container">
      {postList.map((post, id) => (
        <SocialCard
          key={post.postId}
          postId={post.postId}
          postTitle={post.postTitle}
          postText={post.postText}
          userName={post.userName}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
};

export default SocialCards;
