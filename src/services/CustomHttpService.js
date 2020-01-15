import axios from "axios";
import config from "../config/env-config";

export const axiosGet = async options => {
  let fullApiPath = `${config.API_PATH}${options.endpoint}`;
  try {
    let res = await axios.get(fullApiPath);
    return res;
  } catch (e) {
    return e.response;
  }
};
