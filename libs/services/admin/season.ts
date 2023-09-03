import { SeasonFormValuseInterface } from "@/libs/contracts/admin";
import { CallApi } from "@/libs/helpers/callApi";

export const getAllCourseForCreateSeason = async ({ url }: { url: string }) => {
  return await CallApi().get(url);
};

export async function createSeason(values: SeasonFormValuseInterface) {
  await CallApi().post("/admin/seasons/create", values);
}
export async function GetSeasons({ page = 1, pre_page = 10, }){
   const res =await  CallApi().get(`/admin/seasons?page=${page}&item_count=${pre_page}`) ;
   return res?.data;
}