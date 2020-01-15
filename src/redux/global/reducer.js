import * as $ from "../actionTypes";
import { colors } from "../../config/constants";

const initialState = {
  activeQuestionIndex: 0,

  difficulty: 2,
  score: 0,
  time: 0
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === $.GET_DAILY_NOTIFICATION_STATUS_SUCCESS) {
    return {
      ...state,
      dailyNotification: payload.isDailyNotificationActive
    };
  }

  if (type === $.SET_DAILY_NOTIFICATION_STATUS_REQUEST) {
    return {
      ...state,
      dailyNotification: !state.dailyNotification
    };
  }

  if (type === $.SEND_CONTACT_ME_MESSAGE_REQUEST) {
    return {
      ...state,
      contactMeMessageInProgress: true,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: false
    };
  }
  if (type === $.SEND_CONTACT_ME_MESSAGE_SUCCESS) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: true
    };
  }
  if (type === $.SEND_CONTACT_ME_MESSAGE_FAILURE) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: true,
      contactMeMessageCompleted: true
    };
  }
  if (type === $.SEND_CONTACT_ME_MESSAGE_RESET) {
    return {
      ...state,
      contactMeMessageInProgress: false,
      contactMeMessageFailed: false,
      contactMeMessageCompleted: false
    };
  }

  if (type == $.SHOW_SPINNER_OVERLAY) {
    return {
      ...state,
      showSpinner: true
    };
  }

  if (type == $.HIDE_SPINNER_OVERLAY) {
    return {
      ...state,
      showSpinner: false
    };
  }

  if (type == $.SHOW_COMMON_ALERT) {
    return {
      ...state,
      isCommonAlertVisible: true,
      commonAlertTitle: payload.title,
      commonAlertSubtitle: payload.subtitle,
      commonAlertEmoji: payload.emoji
    };
  }

  if (action.type === $.HIDE_COMMON_ALERT) {
    return {
      ...state,
      isCommonAlertVisible: false,
      commonAlertTitle: "",
      commonAlertSubtitle: "",
      commonAlertEmoji: ""
    };
  }

  if (type === $.SET_TABBED_APP_STARTED) {
    return {
      ...state,
      tabbedAppStarted: true
    };
  }

  if (type === $.TOGGLE_VERSION_UPDATE_MODAL) {
    return {
      ...state,
      isVersionUpdateModalVisible: !state.isCommonAlertVisible
    };
  }

  if (type === $.SET_NEW_VERSION_DOWNLOAD_LINK) {
    return {
      ...state,
      newVersionDowloadLink: action.payload
    };
  }

  return state;
};
