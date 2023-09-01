import CallApi from "@/libs/helpers/callApi";
import { Cart } from "@/libs/model/cart";

export default async function StoreCart(courseId: string) {
  await CallApi().get(`/carts/${courseId}`);
}
export const GetOrders = async ()=> {
  return (await CallApi().get("/carts")).data;
};
export const DeleteOrder = async (orderId: string) => {
  await CallApi().delete(`/carts/${orderId}`);
};
