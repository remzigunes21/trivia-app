import * as $ from "../actionTypes";

const initialState = {
  questions: [],
  activeQuestionIndex: 0,
  score: 0,
  time: 15,
  difficulty: 1
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === $.GET_QUESTIONS_SUCCESS) {
    return {
      ...state,
      questions: payload.data,

      difficulty: payload.dificulty
    };
  }

  return state;
  // if (type === $.LOGIN_REQUEST) {
  //   return {
  //     ...state,
  //     loginInProgress: true,
  //     loginFailed: false,
  //     loginCompleted: false
  //   };
  // }

  // else if (type === $.LOGIN_FAILURE) {
  //   return {
  //     ...state,
  //     loginInProgress: false,
  //     loginFailed: true,
  //     loginCompleted: true
  //   };
  // }
};
