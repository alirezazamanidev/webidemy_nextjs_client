import { useRouter } from "next/navigation";
import { StoreCookieForLogin } from "../helpers/auth";
import { CallApi } from "../helpers/callApi";

export default function useRefreshToken() {
  const refresh = async () => {
    const res = await CallApi().get("/auth/refresh");
    if (res.status === 200) {
      await StoreCookieForLogin(
        res.data?.access_token,
        res?.data?.refresh_token
      );

    }
  };

  return refresh;
}
