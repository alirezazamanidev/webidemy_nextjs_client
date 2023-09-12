import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

interface options {
  course?: string;
  episode?: string;
  page?: number;
  limit?: number;
}
export const GetComments = ({
  course = undefined,
  episode = undefined,
  page = 1,
  limit = 1,
}: options) => {
  const { data, isLoading } = useQuery(
    ["get-comments", page, limit, course, episode],
    async () => {
      const values = { subject: { course, episode }, page, limit };

      const res = await CallApi().post("/comments", values);

      return res?.data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60,
    }
  );

  return { data, isLoading };
};
