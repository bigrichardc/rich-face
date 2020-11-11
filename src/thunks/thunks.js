import {
  createComment,
  createBlogpost,
  deleteBlogpost,
  loadBlogpostsFailure,
  loadBlogpostsInProgress,
  loadBlogpostsSuccess,
  loadCommentsFailure,
  loadCommentsInProgress,
  loadCommentsSuccess,
} from '../actions/actions';

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://http://rich-face-api.herokuapp.com/'
    : 'http://localhost:4000/';

//for testing
export const displayAlert = (text) => () => {
  alert(`Err: ${text}`);
};

//settting async as will be grabbing data from external source at some point
export const loadBlogposts = () => async (dispatch, getState) => {
  try {
    dispatch(loadBlogpostsInProgress());
    fetch(apiUrl + 'posts')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const blogposts = res;
        dispatch(loadBlogpostsSuccess(blogposts));
      });
  } catch (err) {
    console.log(err);
    dispatch(loadBlogpostsFailure());
    dispatch(displayAlert(err));
  }
};

export const addBlogpost = (blogpost) => async (dispatch) => {
  try {
    const body = JSON.stringify({ blogpost });
    const response = await fetch(apiUrl + 'posts', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const result = await response.body;
    dispatch(createBlogpost(blogpost));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const deleteBlogpostThunk = (blogpost) => async (dispatch) => {
  try {
    const deleteUrl = apiUrl + 'posts/' + blogpost.postid;
    const response = await fetch(deleteUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'delete',
    });
    const result = await response.body;
    dispatch(deleteBlogpost(blogpost));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

//commentThunks

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(loadCommentsInProgress());
    fetch(apiUrl + 'comments')
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

export const addPostComment = (comment) => async (dispatch) => {
  try {
    const body = JSON.stringify({ comment });
    const response = await fetch(apiUrl + 'comments', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const result = await response.body;
    dispatch(createComment(comment));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};
