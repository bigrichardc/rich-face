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

//const apiUrl =
//  process.env.RICHFACE_API_URL !== undefined ? process.env.RICHFACE_API_URL : 'http://localhost/';

//for testing
export const displayAlert = (text) => () => {
  alert(`Err: ${text}`);
};

//settting async as will be grabbing data from external source at some point
export const loadBlogposts = () => async (dispatch, getState) => {
  try {
    console.log('api url: ');
    console.log(process.env.RICHFACE_API_URL);
    console.log('nodeenv:');
    console.log(process.env.NODE_ENV);

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

export const addBlogpost = (blogpost) => async (dispatch) => {
  try {
    const body = JSON.stringify({ blogpost });
    const response = await fetch('http://localhost:4000/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    console.log(body);
    const result = await response.body;
    console.log(result);
    dispatch(createBlogpost(blogpost));
  } catch (err) {
    console.log(err);
    dispatch(displayAlert(err));
  }
};

export const deleteBlogpostThunk = (blogpost) => async (dispatch) => {
  try {
    const deleteUrl = 'http://localhost:4000/posts/' + blogpost.postid;
    const response = await fetch(deleteUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'delete',
    });
    const result = await response.body;
    console.log(result);
    dispatch(deleteBlogpost(blogpost));
  } catch (err) {
    console.log(err);
    dispatch(displayAlert(err));
  }
};

//commentThunks

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(loadCommentsInProgress());
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

export const addPostComment = (comment) => async (dispatch) => {
  try {
    const body = JSON.stringify({ comment });
    const response = await fetch('http://localhost:4000/comments', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const result = await response.body;
    console.log(result);
    dispatch(createComment(comment));
  } catch (err) {
    console.log(err);
    dispatch(displayAlert(err));
  }
};
