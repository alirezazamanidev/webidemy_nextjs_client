import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

interface options {
  course?: string;
  episode?: string;
  blog?:string
  page?: number;
  limit?: number;
}
export const GetComments = ({
  course = undefined,
  episode = undefined,
  blog=undefined,
  page = 1,
  limit = 1,
}: options) => {
  const { data, isLoading } = useQuery(
    ["get-comments", page, limit, course, episode],
    async () => {
      const values = { subject: { course, episode,blog }, page, limit };

      const res = await CallApi().post("/comments", values);

      return res?.data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0
    }
  );

  return { data, isLoading };
};
