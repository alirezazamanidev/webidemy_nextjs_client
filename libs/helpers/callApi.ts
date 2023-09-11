
import axios from "axios";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotAcceptableExceptions } from "../exceptions/NotAcceptableExceptions";
import { NotFoundException } from "../exceptions/NotFoundException";
import useRefreshToken from "../hooks/useRefreshToken";
export const CallApi = () => {
  const refresh=useRefreshToken();
  
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_API_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },
    (err) => {
      throw err;
    }
  );
  axiosInstance.interceptors.response.use((res)=>{
    return res;
  },async(err)=>{
 
    const res = err.response;
    
    if (res.status === 400) {
      throw new BadRequestException(res?.data?.errors?.message);
    }
    if (res.status === 404) {
      throw new NotFoundException(res?.data?.errors?.message);
    }
    if (res.status === 406) {
      throw new NotAcceptableExceptions(res?.data?.errors?.message);
    }
    if(res.status===401){
      await refresh();
    }
  

    throw err;

  })
  return axiosInstance;
};
