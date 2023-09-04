
import { CallApi } from "../helpers/callApi";
import { useQuery } from "react-query";
export default function useAuth() {
  const { data,isLoading,error } = useQuery(
    "profile-user",
    () => {
      return CallApi().get("auth/profile");
    }
  );

 
  return { user: data?.data, error, loading: isLoading };
}


