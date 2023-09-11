import {
  CourseFormValuseInterface,
  categoryFormValuesInterface,
} from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export const GetNotApprovedComments = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_notApprovedComment_adminPanel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/comments/approved?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );
  return { isLoading, data, refetch };
};

export const GetApprovedComments = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show_notApprovedComment_adminPanel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/comments?page=${page}&item_count=${limit}`
      );

      return res?.data;
    },
    {
      cacheTime: 1000 * 60 * 5,
    }
  );
  return { isLoading, data, refetch };
};

export const DeleteComment = async (commentId: string) => {
  await CallApi().delete(`/admin/comments/${commentId}`);
};

export default async function UpdateCategory(
  cateId: string,
  value: categoryFormValuesInterface
) {
  await CallApi().put(`/admin/categories/edit/${cateId}`, value);
}

export const SendAnswerComment = async (values: any) => {
  await CallApi().post("/admin/comments/approved", values);
};
