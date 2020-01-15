import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import * as Api from "./Api.js";
import * as $ from "../actionTypes";

const $A = function(type, payload) {
  return { type, payload };
};

const getQuestionsDataSaga = function*(action) {
  try {
    const { difficulty } = action.payload;
    console.log("TCL: difficulty", difficulty);

    if (difficulty) {
      let difficultyText = "";
      if (difficulty === 1) {
        difficultyText = "easy";
      } else if (difficulty === 2) {
        difficultyText = "medium";
      } else if (difficulty === 3) {
        difficultyText = "hard";
      } else {
        return null;
      }

      const response = yield call(Api.getQuestions, difficultyText);
      console.log("TCL: response", response);
      yield put(
        $A($.GET_QUESTIONS_SUCCESS, { data: response.data.results, difficulty })
      );
    }
  } catch (error) {}
};

// prettier-ignore
export default  function* () {
  yield takeLatest($.GET_QUESTIONS_REQUEST, getQuestionsDataSaga);


 }
