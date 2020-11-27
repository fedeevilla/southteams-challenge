import axios from "axios";

let BASE_URL = "https://randomuser.me/api/";

const DEFAULT_OPTIONS = {
  crossDomain: true,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

const api = {
  request: async function ({ url, method, data = {}, ...rest }) {
    try {
      const response = await axios({
        ...DEFAULT_OPTIONS,
        url: BASE_URL + url,
        method: method || "get",
        data,
        headers: {
          ...DEFAULT_OPTIONS.headers,
        },
        ...rest,
      });

      if (response.status >= 400) throw response;

      return { data: response.data };
    } catch (error) {
      return { error };
    }
  },
  users: {
    fetchUsers: async function (limit) {
      const { error, data } = await api.request({
        url: `/?results=${limit}`,
        method: "GET",
      });

      if (error) {
        return Promise.reject(error);
      }

      return Promise.resolve(data);
    },
  },
};

export default api;
