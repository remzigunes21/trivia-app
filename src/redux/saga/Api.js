import * as Service from "../../services/CustomHttpService";

export const doGet = (endpoint, body) => {
  return Service.axiosGet({
    body,
    endpoint
  });
};

export const getQuestionsEasy = () => {
  return doGet("/api.php?amount=10&category=11&difficulty=easy&type=multiple");
};

export const getQuestionsMedium = () => {
  return doGet(
    "/api.php?amount=10&category=11&difficulty=medium&type=multiple"
  );
};

export const getQuestionsHard = () => {
  return doGet("/api.php?amount=10&category=11&difficulty=hard&type=multiple");
};
