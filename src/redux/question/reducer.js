import * as $ from "../actionTypes";

const initialState = {
  questions: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === $.GET_QUESTIONS_SUCCESS) {
    return {
      ...state,
      questions: payload
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
