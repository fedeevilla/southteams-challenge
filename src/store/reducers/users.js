import * as R from "ramda";
import {
  FETCH_USERS_RESOLVED,
  FETCH_USERS_STARTED,
  FETCH_USERS_REJECTED,
  UPDATE_USER_RESOLVED,
  UPDATE_USER_REJECTED,
} from "../actions/users";

const initialState = {
  list: [],
  loading: false,
};

export const users = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case FETCH_USERS_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_RESOLVED:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_RESOLVED:
      return {
        ...state,
        //Search by user ID and update it.
        list: R.map(
          (user) =>
            user.login.uuid !== payload.id
              ? user
              : {
                  ...user,
                  name: {
                    ...user.name,
                    first: payload.data.first,
                    last: payload.data.last,
                  },
                  email: payload.data.email,
                  cell: payload.data.cell,
                },
          state.list
        ),
      };
    case UPDATE_USER_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
