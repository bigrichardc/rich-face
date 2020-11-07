import {
  SET_A11Y_MESSAGE,
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
    case CREATE_BLOGPOST: {
      const { blogpost } = payload;
      return state.concat(blogpost);
    }

    case DELETE_BLOGPOST: {
      const { blogpost: blogpostToRemove } = payload;
      return state.filter((blogpost) => blogpost.postid !== blogpostToRemove.postid);
    }
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

//a11y reducers

export const a11yMessage = (state = [], action) => {
  const { type, payload } = action;
  console.log('I got hit');
  console.log(type);
  console.log(payload);

  switch (type) {
    case SET_A11Y_MESSAGE:
      console.log('setmessage');
      return payload.message;
    default:
      return state;
  }
};
