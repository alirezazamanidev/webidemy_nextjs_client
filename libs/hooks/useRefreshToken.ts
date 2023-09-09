import { StoreCookieForLogin } from "../helpers/auth";
import { CallApi } from "../helpers/callApi";
import Cookies from "universal-cookie";

export default function useRefreshToken() {
   const cookieStore=new Cookies()
  const refresh = async () => {
    let refreshToken = cookieStore.get("x-refresh-token");

    
    if (refreshToken) {
      const res = await CallApi().post("/auth/refresh", {
        refreshToken,
      });
      if (res.status === 200) {
        await StoreCookieForLogin(
          res?.data?.access_token,
          res?.data?.refresh_token
        );
      }
    }

  }

  return refresh;

}
