export const CREATE_BLOGPOST = 'CREATE_BLOGPOST';
export const createBlogpost = (blogpost) => ({
  type: CREATE_BLOGPOST,
  payload: { blogpost },
});

export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
export const deleteBlogpost = (blogpost) => ({
  type: DELETE_BLOGPOST,
  payload: { blogpost },
});

export const LOAD_BLOGPOSTS_IN_PROGRESS = 'LOAD_BLOGPOSTS_IN_PROGRESS';
export const loadBlogpostsInProgress = () => ({
  type: LOAD_BLOGPOSTS_IN_PROGRESS,
});

export const LOAD_BLOGPOSTS_SUCCESS = 'LOAD_BLOGPOSTS_SUCCESS';
export const loadBlogpostsSuccess = (blogposts) => ({
  type: LOAD_BLOGPOSTS_SUCCESS,
  payload: { blogposts },
});

export const LOAD_BLOGPOSTS_FAILURE = 'LOAD_BLOGPOSTS_FAILURE';
export const loadBlogpostsFailure = () => ({
  type: LOAD_BLOGPOSTS_FAILURE,
});
