import { CallApi } from "@/libs/helpers/callApi";

export const DeleteUser = async (courseId: string) => {
  await CallApi().delete(`/admin/users/${courseId}`);
};
export const AdminToggleUser = async (courseId: string) => {
  await CallApi().put(`/admin/users/${courseId}`);
};
