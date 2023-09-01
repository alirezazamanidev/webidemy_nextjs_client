import CallApi from "@/libs/helpers/callApi";

export const getUsers = async ({ page = 1, pre_page = 10 }) => {
  const res = await CallApi().get(
    `/admin/users?page=${page}&item_count=${pre_page}`
  );
  return res?.data;
};

export const DeleteUser = async (userID: string) => {
  await CallApi().delete(`/admin/users/${userID}`);
};
export const ToggleaminUser = async (userID: string) => {
  await CallApi().get(`/admin/users/toggleAdmin/${userID}`);
};
