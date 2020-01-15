import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import * as Api from "./Api.js";
import * as $ from "../actionTypes";

const $A = function(type, payload) {
  return { type, payload };
};

const getQuestionsEasySaga = function*(action) {
  try {
    const { data } = yield call(Api.getQuestionsEasy);

    yield put($A($.GET_QUESTIONS_SUCCESS, data));
  } catch (error) {}
};

const getQuestionsMediumSaga = function*(action) {
  try {
    const { data } = yield call(Api.getQuestionsMedium);

    yield put($A($.GET_QUESTIONS_SUCCESS, data));
  } catch (error) {}
};

const getQuestionsHardSaga = function*(action) {
  try {
    const { data } = yield call(Api.getQuestionsHard);

    yield put($A($.GET_QUESTIONS_SUCCESS, data));
  } catch (error) {}
};

// prettier-ignore
export default  function* () {
  yield takeLatest($.GET_QUESTIONS_EASY_REQUEST, getQuestionsEasySaga);
  yield takeLatest($.GET_QUESTIONS_MEDIUM_REQUEST, getQuestionsMediumSaga);
  yield takeLatest($.GET_QUESTIONS_HARD_REQUEST, getQuestionsHardSaga);
//   yield takeLatest($.SIGNUP_REQUEST, trySignupSaga);
//   yield takeLatest($.CREATE_PROJECT_REQUEST, createProjectSaga);
//   yield takeLatest($.GET_PROJECTS_REQUEST, getProjectsRequestSaga);
//   yield takeLatest($.GET_PROJECT_REQUEST, getProjectRequestSaga);
//   yield takeLatest($.GET_PROFILE_REQUEST, getProfileRequestSaga);
//   yield takeLatest($.UPDATE_PROFILE_REQUEST, updateProfileRequestSaga);
 }
