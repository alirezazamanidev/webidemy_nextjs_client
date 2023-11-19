
import { useQuery } from "react-query";

import useAxiosPrivate from "./useAxiosPrivate";
export default function useAuth() {
  const axiosxiosPrivate = useAxiosPrivate();
  const { data, isLoading, error,refetch } = useQuery(
    "profile-user",
    () => {
      return axiosxiosPrivate.get("auth/profile");
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      retry:1,
      cacheTime:0,
    
    }
  );

  return { user: data?.data, error, loading: isLoading, refetch };
}
