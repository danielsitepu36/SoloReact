import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  SET_ERRORS,
  POST_SCREAM,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_SCREAM,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from "../types";

// Get all screams
export const getScreams = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("TEST");
};
