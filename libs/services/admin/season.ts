import { SeasonFormValuseInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { toast } from "react-toastify";

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
