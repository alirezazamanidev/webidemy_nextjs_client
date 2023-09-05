import { CallApi } from "@/libs/helpers/callApi";

export const createCourse = async (values: any) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  await CallApi().post("/admin/courses/create", formData);

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
