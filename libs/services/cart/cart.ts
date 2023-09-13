import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetUserOrders = () => {
  const { data, isLoading, refetch } = useQuery(
    ["Get-user-orders"],
    async () => {
      const res = await CallApi().get("orders");
      return res.data;
    },
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    }
  );

  return { data, isLoading, refetch };
};
export const AddOneOrder = async (courseId: string) => {
  await CallApi().post("/orders/create", {
    course: courseId,
  });
};
export const DeleteOneOrder = async (orderID: string) => {
  await CallApi().delete(`orders/${orderID}`);
};
