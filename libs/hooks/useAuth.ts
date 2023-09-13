import { CallApi } from "../helpers/callApi";
import { useQuery } from "react-query";
import Cookies from "universal-cookie";
import { StoreCookieForLogin } from "../helpers/auth";
import useAxiosPrivate from "./useAxiosPrivate";
export default function useAuth() {
  const axiosxiosPrivate=useAxiosPrivate();
  const { data, isLoading, error, isError, refetch } = useQuery(
    "profile-user",
    () => {
      return axiosxiosPrivate.get("auth/profile");
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      retry: false,
      staleTime: 5 * 1000,
    }
  );

  return { user: data?.data, error, loading: isLoading, refetch };
}
