import { useEffect } from "react";
import { axiosPerivate } from "../helpers/callApi";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercepter = axiosPerivate.interceptors.request.use(
      (config) => {
        
        return config;
      }
    );
    const responseIntercepter = axiosPerivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        // console.log(prevRequest);

        if (err?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refresh();
          return axiosPerivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosPerivate.interceptors.response.eject(responseIntercepter);
      axiosPerivate.interceptors.request.eject(requestIntercepter);
    };
  }, [refresh]);
  return axiosPerivate;
};

export default useAxiosPrivate;
