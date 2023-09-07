import { CourseFormValuseInterface, categoryFormValuesInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetCategories = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_categories_adminPanel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/categories?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );
  return { isLoading, data, refetch };
};
export const GetSingleCategory = (cateId: string) => {
  const { data, isLoading, isError } = useQuery(
    ["GetSinglecategory-adminPanel", cateId],
    async () => {
      const res = await CallApi().get(`/admin/categories/edit/${cateId}`);

      return res?.data;
    },
    {
      retry: false,
    }
  );

  return { data, isLoading, isError };
};
export const DeleteCate = async (cateId: string) => {
  await CallApi().delete(`/admin/categories/${cateId}`);
};

export default async function UpdateCategory(
  cateId: string,
  value: categoryFormValuesInterface
) {
  await CallApi().put(`/admin/categories/${cateId}`, value);
}
