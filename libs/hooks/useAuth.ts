import { CallApi } from "../helpers/callApi";
import { useQuery } from "react-query";
import Cookies from "universal-cookie";
import { StoreCookieForLogin } from "../helpers/auth";
export default function useAuth() {
  const { data, isLoading, error, isError ,refetch} = useQuery(
    "profile-user",
    () => {
      return CallApi().get("auth/profile");
    },
    {
      retry: false,
      retryOnMount: false,
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      onError: async (err: any) => {
        if (err.response.status === 401) {
         
        }
      },
    }
  );

  return { user: data?.data, error, loading: isLoading ,refetch};
}
