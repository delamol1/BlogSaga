import { createRoutine } from "redux-saga-routines";
import { put, call } from "redux-saga/effects";

import api from "../api";
// import notification from '../Common/Notification';

export const getAllPosts = createRoutine("GETALLPOSTS");
export const getPost = createRoutine("GETPOST");
export const leaveComment = createRoutine("LEAVECOMMENT");

export function* sagaOnGetAllPosts() {
  yield put(getAllPosts.request());
  try {
    const apiResult = yield call(() => api.posts.getAllPosts());
    if (apiResult) {
      yield put(getAllPosts.success(apiResult.data));
    } else {
      // notification('error', apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.');
      yield put(
        getAllPosts.failure(
          apiResult.statusText
            ? apiResult.statusText
            : "Error. Please try again later."
        )
      );
    }
  } catch (e) {
    // notification('error', 'Error. Please try again later.');
    yield put(getAllPosts.failure("sorry, error"));
  }
}

export function* sagaOnGetPost({ payload }) {
  yield put(getPost.request());
  try {
    const apiResult = yield call(() => api.posts.getPost(payload.data));

    if (apiResult) {
      yield put(getPost.success(apiResult.data));
    } else {
      // notification('error', apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.');
      yield put(
        getPost.failure(
          apiResult.statusText
            ? apiResult.statusText
            : "Error. Please try again later."
        )
      );
    }
  } catch (e) {
    // notification('error', 'Error. Please try again later.');
    yield put(getPost.failure("sorry, error"));
  }
}

export function* sagaOnLeaveComment({ payload }) {
  yield put(leaveComment.request());
  try {
    const apiResult = yield call(() => api.posts.leaveComment(payload.data));

    if (apiResult) {
      yield put(leaveComment.success(apiResult.data));
    } else {
      // notification('error', apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.');
      yield put(
        leaveComment.failure(
          apiResult.statusText
            ? apiResult.statusText
            : "Error. Please try again later."
        )
      );
    }
  } catch (e) {
    // notification('error', 'Error. Please try again later.');
    yield put(leaveComment.failure("sorry, error"));
  }
}
