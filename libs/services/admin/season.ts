import { SeasonFormValuseInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export const GetSeasons = (page: number, limit: number) => {
  const { data, isLoading, refetch } = useQuery(
    ["Show-seasons-admin-panel", page],
    async () => {
      const res = await CallApi().get(
        `/admin/seasons?page=${page}&item_count=${limit}`
      );
      return res?.data;
    }
  );
  return { data, isLoading, refetch };
};
export async function createSeason(values: SeasonFormValuseInterface) {
  await CallApi().post("/admin/seasons/create", values);
}
export async function UpdateSeason(
  values: SeasonFormValuseInterface,
  seasonId?: string
) {
  await CallApi().put(`/admin/seasons/edit/${seasonId}`, values);
}
export async function DeleteSeason(seasonId: string) {
  try {
    await CallApi().delete(`/admin/seasons/${seasonId}`);
  } catch (err) {
    if (err instanceof BadRequestException) {
      toast.error(err?.message);
    }
  }
}
