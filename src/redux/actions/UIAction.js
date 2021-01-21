import { CHANGE_THEME } from "../types";

export const changeTheme = (status) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, payload: status });
  localStorage.setItem("theme", status);
};
