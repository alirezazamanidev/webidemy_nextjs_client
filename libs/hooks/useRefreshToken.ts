import { CallApi } from "../helpers/callApi";

export default function useRefreshToken() {
 
  const refresh = async () => {
    const res = await CallApi().get("/auth/refresh");
    return res?.data;

  }

  return refresh;

}
