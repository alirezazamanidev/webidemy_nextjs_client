import { SeasonFormValuseInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { toast } from "react-toastify";

export const getAllCourseForCreateSeason = async ({ url }: { url: string }) => {
  return await CallApi().get(url);
};

export async function createSeason(values: SeasonFormValuseInterface) {
  await CallApi().post("/admin/seasons/create", values);
}
export async function GetSeasons({ page = 1, pre_page = 10, }){

}
export async function DeleteSeason(seasonId:string){
  try{
    await CallApi().delete(`/admin/seasons/${seasonId}`);

  }catch(err){
    if(err instanceof BadRequestException){
      toast.error(err?.message);
    }
  }

}