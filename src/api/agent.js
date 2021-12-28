/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import axios from "axios";
import history from "utils/history";

const sleep = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token && config) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === "development") await sleep(1000);

    return response;
  },
  (error) => {
    const { status, config } = error;
    // eslint-disable-next-line default-case
    switch (status) {
      case 400:
        if (config.method === "get") {
          history.push("/not-found");
        }

        break;
      case 401:
        if (status === 401) {
          console.error("Session expired - please login again");
        }
        break;
      case 404:
        history.push("/not-found");
        break;
      case 500:
        history.push("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Activities = {
  list: (params) => axios.get("/activities", { params }).then(responseBody),
  details: (id) => requests.get(`/activities/${id}`),
  create: (activity) => requests.post("/activities", activity),
  update: (activity) => requests.put(`/activities/${activity.id}`, activity),
  delete: (id) => requests.del(`/activities/${id}`),
  attend: (id) => requests.post(`/activities/${id}/attend`, {}),
};

const Auth = {
  current: () => requests.get("/auth/profile"),
  login: (user) => requests.post("/auth/login", user),
  register: (user) => requests.post("/auth/register", user),
  refreshToken: () => requests.post("/auth/refreshToken", {}),
  verifyEmail: (token, email) =>
    requests.post(`/auth/verifyEmail?token=${token}&email=${email}`, {}),
  resendEmailConfirm: (email) => requests.get(`/auth/resendEmailConfirmationLink?email=${email}`),
};

const agent = {
  Activities,
  Auth,
};

export default agent;
