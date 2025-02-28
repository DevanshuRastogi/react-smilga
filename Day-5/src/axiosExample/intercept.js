import axios from "axios";

const Intercept = axios.create({
  baseURL: "https://www.course-api.com",
});

Intercept.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Intercept.interceptors.response.use(
  (response) => {
    console.log("response is here");
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Intercept;
