import { CallApi } from "@/libs/helpers/callApi";

export const createCourse = async (values: any) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  await CallApi().post("/admin/courses/create", formData);

};

export const GetOneCourseForEdit = async ({
  courseId,
}: {
  courseId: string;
}) => {
  return await CallApi().get(`/admin/courses/edit/${courseId}`);
};
export const getCourses = async ({ page = 1, pre_page = 2 }) => {
  const res = await CallApi().get(
    `/admin/courses?page=${page}&item_count=${pre_page}`
  );

  return res?.data;
};
export const UpdateCourse = async (courseId: string, values: any) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  await CallApi().put(`/admin/courses/edit/${courseId}`, formData);
};
export const DeleteCourse = async (courseId: string) => {
  await CallApi().delete(`/admin/courses/${courseId}`);
};
