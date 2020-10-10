import {
  CREATE_BLOGPOST,
  DELETE_BLOGPOST,
  LOAD_BLOGPOSTS_FAILURE,
  LOAD_BLOGPOSTS_IN_PROGRESS,
  LOAD_BLOGPOSTS_SUCCESS,
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
