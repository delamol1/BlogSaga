import { takeLatest, all } from "redux-saga/effects";

import {
  sagaOnGetAllPosts,
  getAllPosts,
  sagaOnGetPost,
  getPost,
  leaveComment,
  sagaOnLeaveComment
} from "./Blog.action";

export function* postWatcher() {
  yield all([takeLatest(getAllPosts.TRIGGER, sagaOnGetAllPosts)]);
  yield all([takeLatest(getPost.TRIGGER, sagaOnGetPost)]);
  yield all([takeLatest(leaveComment.TRIGGER, sagaOnLeaveComment)]);
}
