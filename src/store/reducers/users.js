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
        list: state.list.map((user) =>
          user.login.uuid !== payload.id
            ? user
            : {
                ...user,
                name: {
                  ...user.name,
                  first: payload.data.firstEdit,
                  last: payload.data.lastEdit,
                },
                email: payload.data.emailEdit,
                cell: payload.data.cellEdit,
              }
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
