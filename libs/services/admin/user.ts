import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetUsers = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_users_adminPanel", page],
    async () => {
      const pre_page = 2;
      const res = await CallApi().get(
        `/admin/users?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );

  return { data, isLoading, refetch };
};
export const DeleteUser = async (courseId: string) => {
  await CallApi().delete(`/admin/users/${courseId}`);
};
export const AdminToggleUser = async (courseId: string) => {
  await CallApi().put(`/admin/users/${courseId}`);
};
