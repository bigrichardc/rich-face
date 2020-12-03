import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../css/SocialCard.css';
import CommentForm from '../components/CommentForm';
import { loadBlogposts, loadComments } from '../thunks/thunks';

function PostImage({ image }) {
  if (!image) {
    return null;
  }
  return <img alt="" className="social-card__post-image" src={image} />;
}

const SocialCard = ({ postId, postTitle, postText, userName, postImage, postDate }) => {
  return (
    <div className="social-card">
      <h2 className="social-card__title">{postTitle}</h2>
      {postDate && <p>{new Date(postDate).toLocaleDateString()}</p>}
      <div className="social-card__user-post">
        <div className="social-card__user-details">
          <img alt="" src="/src/data/avatar.png" className="social-card__avatar-image" />
          <h3 className="social-card__username">{userName}</h3>
        </div>
        <div className="social-card__user-post-details">
          <PostImage image={postImage} />
          <div>{postText}</div>
        </div>
      </div>
      <div className="social-card__comment-section">
        <CommentForm postId={postId} />
      </div>
    </div>
  );
};

const SocialCards = ({
  blogposts = [],
  isLoading,
  startLoadingBlogPosts,
  startLoadingComments,
}) => {
  useEffect(() => {
    startLoadingBlogPosts();
    startLoadingComments();
  }, [startLoadingBlogPosts, startLoadingComments]);

  const loadingMessage = <div>Loading posts...</div>;

  const content = (
    <div className="social-card__container">
      {blogposts.map((post, id) => (
        <SocialCard
          key={post.postid}
          postId={post.postid}
          postTitle={post.posttitle}
          postText={post.posttext}
          userName={post.username}
          postImage={post.postimage}
          postDate={post.postdate}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  blogposts: state.blogposts,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingBlogPosts: () => dispatch(loadBlogposts()),
  startLoadingComments: () => dispatch(loadComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialCards);
