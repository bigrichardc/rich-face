import {
  loadBlogpostsFailure,
  loadBlogpostsInProgress,
  loadBlogpostsSuccess,
} from '../actions/actions';

import { posts } from '../data/mockdata.js';
let postslist = posts.POSTS;

//for testing
export const displayAlert = (text) => () => {
  alert(`Err: ${text}`);
};

//settting async as will be grabbing data from external source at some point
export const loadBlogposts = () => async (dispatch, getState) => {
  try {
    dispatch(loadBlogpostsInProgress());
    //here we will get data from db, using mock data for now
    const blogposts = postslist;
    dispatch(loadBlogpostsSuccess(blogposts));
  } catch (err) {
    dispatch(loadBlogpostsFailure());
    dispatch(displayAlert(err));
  }
};
