import {
  loadBlogpostsFailure,
  loadBlogpostsInProgress,
  loadBlogpostsSuccess,
  loadCommentsFailure,
  loadCommentsInProgress,
  loadCommentsSuccess,
} from '../actions/actions';

import { comments } from '../data/mockdata.js';
let commentlist = comments.COMMENTS;

//for testing
export const displayAlert = (text) => () => {
  alert(`Err: ${text}`);
};

//settting async as will be grabbing data from external source at some point
export const loadBlogposts = () => async (dispatch, getState) => {
  try {
    dispatch(loadBlogpostsInProgress());
    fetch('http://localhost:4000/posts')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const blogposts = res;
        dispatch(loadBlogpostsSuccess(blogposts));
      });
  } catch (err) {
    dispatch(loadBlogpostsFailure());
    dispatch(displayAlert(err));
  }
};

//commentThunks

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(loadCommentsInProgress());
    //const comments = commentlist;
    fetch(`http://localhost:4000/comments`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const comments = res;
        dispatch(loadCommentsSuccess(comments));
      });
  } catch (err) {
    dispatch(loadCommentsFailure());
    dispatch(displayAlert(err));
  }
};
