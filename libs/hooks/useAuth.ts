import { CallApi } from "../helpers/callApi";
import { useQuery } from "react-query";
import Cookies from "universal-cookie";
import { StoreCookieForLogin } from "../helpers/auth";
export default function useAuth() {
  const cookieStore = new Cookies();
  const { data, isLoading, error, isError } = useQuery(
    "profile-user",
    () => {
      return CallApi().get("auth/profile");
    },
    {
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      onError: async (err: any) => {
        let refreshToken = cookieStore.get("x-refresh-token");
        if (refreshToken) {
          const res = await CallApi().get("/auth/refresh", {
            headers: {
              "Content-Type": "application/json",
              refresh_token: refreshToken,
            },
          });
          if (res.status === 200) {
            await StoreCookieForLogin(
              res?.data?.access_token,
              res?.data?.refresh_token
            );
          }
        }
      },
    }
  );

  return { user: data?.data, error, loading: isLoading };
}
