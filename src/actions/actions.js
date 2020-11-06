// comment actions

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

//comment actions

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  payload: { comment },
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: { comment },
});

export const LOAD_COMMENTS_IN_PROGRESS = 'LOAD_COMMENTS_IN_PROGRESS';
export const loadCommentsInProgress = () => ({
  type: LOAD_COMMENTS_IN_PROGRESS,
});

export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const loadCommentsSuccess = (comments) => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload: { comments },
});

export const LOAD_COMMENTS_FAILURE = 'LOAD_BLOGPOSTS_FAILURE';
export const loadCommentsFailure = () => ({
  type: LOAD_COMMENTS_FAILURE,
});

//a11y actions

export const SET_A11Y_MESSAGE = 'SET_A11Y_MESSAGE';
export const setA11yMessage = (message) => ({
  type: SET_A11Y_MESSAGE,
  payload: { message },
});
