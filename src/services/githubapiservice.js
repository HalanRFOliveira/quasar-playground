import { Notify } from "quasar";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/users/HalanRFOliveira",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.paramsSerializer = function (params) {
      return params;
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 200) return response.data;
    return response;
  },
  function (error) {
    if (error.response) {
      // Request made and server responded
      if (error.response.status === 404) {
        Notify.create({
          type: "error",
          message: `Erro 404 - endpoint não encontrado`,
          progress: true,
          multiLine: true,
        });
      }
    } else {
      Notify.create({
        type: "error",
        message: "Ocorreu um erro inesperado, contate o Administrador.",
        progress: true,
        multiLine: true,
      });
    }
    return Promise.reject(error);
  }
);

const GithubApi = {
  getAxios() {
    return axiosInstance;
  },

  repos: {
    async getAllPublicRepos() {
      return await axiosInstance.get(`repos`);
    },
  },
};

export default GithubApi;
