import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetCategories = (page: number, limit:number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_categories_adminPanel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/categories?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );
  return { isLoading, data, refetch };
};
