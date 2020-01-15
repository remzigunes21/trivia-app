import * as Service from "../../services/CustomHttpService";

export const doGet = (endpoint, body) => {
  return Service.axiosGet({
    body,
    endpoint
  });
};

export const getQuestions = dificultyText => {
  return doGet(
    `/api.php?amount=10&category=11&difficulty=${dificultyText}&type=multiple`
  );
};

export const getQuestionsCategory = (dificultyText, category) => {
  return doGet(
    `/api.php?amount=10&category=${category}&difficulty=${dificultyText}&type=multiple`
  );
};

////decoder
// decodeHtml = text => {
//   let txt = document.createElement("textarea");
//   txt.innerHTML = text;
//   return txt.value;
// };
