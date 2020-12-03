import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBlogpost } from '../thunks/thunks';
import '../css/BlogpostForm.css';

const UpdateForm = (props) => {
  const { postid } = useParams();
  const [blogpost, setBlogpost] = useState({});
  const { blogposts } = props;

  useEffect(() => {
    const blogpost = blogposts.filter((blogp) => blogp.postid === parseInt(postid));

    setBlogpost(blogpost[0]);
  }, []);

  const submit = (e) => {
    e.preventDefault();

    const updatedBlogpost = {
      postid: postid,
      posttitle: blogpost.posttitle,
      posttext: blogpost.posttext,
      postimage: blogpost.postimage,
    };

    props.onUpdatePressed(updatedBlogpost);
  };

  const newBlogpost = (e) => {
    //make a clone
    let bp = { ...blogpost };
    //change required value on clone
    bp.posttext = e.target.value;
    //set state to clone
    setBlogpost(bp);
  };

  const newBlogpostTitle = (e) => {
    let bp = { ...blogpost };
    bp.posttitle = e.target.value;
    setBlogpost(bp);
  };

  const newBlogpostImageUrl = (e) => {
    let bp = { ...blogpost };
    bp.postimage = e.target.value;
    setBlogpost(bp);
  };
  return (
    <div className="blogpost-form__container">
      <h2 className="blogpost-form__heading">
        Update post: {postid} - {blogpost.posttitle}
      </h2>
      <div className="blogpost-form__style">
        <form onSubmit={submit}>
          <label for="blogpostTitle">Title</label>
          <input
            type="text"
            id="blogpostTitle"
            onChange={newBlogpostTitle}
            value={blogpost.posttitle}
          />
          <label for="blogpostContent">Give us an opinion</label>
          <textarea
            id="blogpostContent"
            placeholder="Enter your thoughts..."
            onChange={newBlogpost}
            value={blogpost.posttext}
          ></textarea>
          <label for="blogpostImageUrl">Image (url)</label>
          <input
            type="text"
            id="blogpostImageUrl"
            onChange={newBlogpostImageUrl}
            value={blogpost.postimage}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogposts: state.blogposts,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdatePressed: (updatedBlogpost) => {
    dispatch(updateBlogpost(updatedBlogpost));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
