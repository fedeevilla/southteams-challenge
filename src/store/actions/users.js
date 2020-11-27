import api from "../../utils/api";

export const FETCH_USERS_STARTED = "FETCH_USERS_STARTED";
export const FETCH_USERS_RESOLVED = "FETCH_USERS_RESOLVED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";

export const UPDATE_USER_RESOLVED = "UPDATE_USER_RESOLVED";
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED";

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS_STARTED,
  });
  try {
    // Defined 50 users as a limit
    const { results } = await api.users.fetchUsers(50);

    dispatch({
      type: FETCH_USERS_RESOLVED,
      payload: results,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_USERS_REJECTED,
    });
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_RESOLVED,
      payload: { id, data },
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: UPDATE_USER_REJECTED,
    });
  }
};
