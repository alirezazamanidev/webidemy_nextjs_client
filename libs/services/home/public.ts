import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const Getcategoryies = () => {
  const {data,isLoading} = useQuery(
    ["get-categores"],
    async () => {
      return (await CallApi().get("/courses/getCategories")).data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 4000000,
      staleTime: 10000,
    }
  );

  return {data,isLoading}
};
