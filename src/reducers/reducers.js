import {
  CREATE_BLOGPOST,
  DELETE_BLOGPOST,
  LOAD_BLOGPOSTS_FAILURE,
  LOAD_BLOGPOSTS_IN_PROGRESS,
  LOAD_BLOGPOSTS_SUCCESS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  LOAD_COMMENTS_FAILURE,
  LOAD_COMMENTS_IN_PROGRESS,
  LOAD_COMMENTS_SUCCESS,
} from '../actions/actions';

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_BLOGPOSTS_IN_PROGRESS:
      return true;
    case LOAD_BLOGPOSTS_SUCCESS:
      return false;
    case LOAD_BLOGPOSTS_FAILURE:
      return false;
    default:
      return false;
  }
};

export const blogposts = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_BLOGPOSTS_SUCCESS: {
      const { blogposts } = payload;
      return blogposts;
    }

    case LOAD_BLOGPOSTS_IN_PROGRESS:
    case LOAD_BLOGPOSTS_FAILURE: {
      return state;
    }

    default:
      return state;
  }
};

export const isLoadingComments = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_COMMENTS_IN_PROGRESS:
      return true;
    case LOAD_BLOGPOSTS_SUCCESS:
    case LOAD_BLOGPOSTS_FAILURE:
      return false;
    default:
      return false;
  }
};

export const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_COMMENT: {
      const { comment } = payload;
      return state.concat(comment);
    }

    case DELETE_COMMENT: {
      const { comment: commentToRemove } = payload;
      return state.filter((comment) => comment.commentId !== commentToRemove.commentId);
    }

    case LOAD_COMMENTS_SUCCESS: {
      const { comments } = payload;
      return comments;
    }

    case LOAD_COMMENTS_IN_PROGRESS:
    case LOAD_COMMENTS_FAILURE: {
      return state;
    }

    default:
      return state;
  }
};
