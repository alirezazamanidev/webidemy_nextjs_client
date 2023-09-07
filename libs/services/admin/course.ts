import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetCourses = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_courses_adminPanel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/courses?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );
  return { data, isLoading, refetch };
};

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
