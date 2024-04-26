import useAuth from "./useAuth";
import { requestApi } from "../requestApi";
import { useEffect } from "react";
import axios from "axios";
import { rootUrl } from "../utils";

const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = requestApi.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        const accessToken = auth?.accessToken;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    const responseIntercept = requestApi.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        console.log("original request from error ", originalRequest);
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(`${rootUrl}/auth/refresh-token`, {
              refreshToken,
            });
            const { token } = response.data;

            setAuth({ ...auth, accessToken: token });
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (err) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      requestApi.interceptors.request.eject(requestIntercept);
      requestApi.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.accessToken]);

  return { requestApi };
};

export default useAxios;
