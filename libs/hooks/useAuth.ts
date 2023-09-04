import { CallApi } from "../helpers/callApi";
import { useQuery } from "react-query";
export default function useAuth() {
  const { data, isLoading, error ,isError} = useQuery(
    "profile-user",
    () => {
      return CallApi().get("auth/profile");
    },
    {
      retry: false,
      retryOnMount: false,
      onError: (err:any) => {
        let isrefresh=false;
        if(err.response.status===401 && !isrefresh){
          isrefresh=true
          CallApi().get('/auth/refresh');
        };
        
      },
    }
  );



  return { user: data?.data, error, loading: isLoading };
}
