
import useSWR from "swr";
import { CallApi } from "../helpers/callApi";
export default function useAuth() {
  const { data, error, isLoading, mutate } = useSWR(
    "profile-user",
    () => {
      return CallApi().get("auth/profile");
    },
    {
      revalidateOnFocus: false,
    }
  );

 
  return { user: data?.data, error, loading: isLoading };
}


