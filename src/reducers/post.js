import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import * as actions from "../components/Blog.action";

const defaultPostData = {
  Post: [],
  CurrentPage: 1,
  TotalPages: 1
};

const initialState = {
  postsList: {
    data: defaultPostData,
    status: "none",
    error: ""
  },
  post: {
    data: defaultPostData,
    status: "none",
    error: ""
  },
  comment: {
    status: "none",
    error: ""
  }
};

const postsList = handleActions(
  {
    [actions.getAllPosts.REQUEST]() {
      return {
        data: defaultPostData,
        status: "request",
        error: ""
      };
    },
    [actions.getAllPosts.SUCCESS](state, { payload }) {
      return {
        data: payload,
        status: "success",
        error: ""
      };
    },
    [actions.getAllPosts.FAILURE](state, { payload }) {
      return {
        data: defaultPostData,
        status: "failure",
        error: payload
      };
    }
  },
  initialState.postsList
);

const post = handleActions(
  {
    [actions.getPost.REQUEST]() {
      return {
        data: defaultPostData,
        status: "request",
        error: ""
      };
    },
    [actions.getPost.SUCCESS](state, { payload }) {
      return {
        data: payload,
        status: "success",
        error: ""
      };
    },
    [actions.getPost.FAILURE](state, { payload }) {
      return {
        data: defaultPostData,
        status: "failure",
        error: payload
      };
    }
  },
  initialState.post
);

const commentList = handleActions(
  {
    [actions.leaveComment.REQUEST]() {
      return {
        status: "request",
        error: ""
      };
    },
    [actions.leaveComment.SUCCESS](state, { payload }) {
      return {
        status: "success",
        error: ""
      };
    },
    [actions.leaveComment.FAILURE](state, { payload }) {
      return {
        status: "failure",
        error: payload
      };
    }
  },
  initialState.comment
);

export const posts = combineReducers({
  postsList,
  post,
  commentList
});
