import { CallApi } from "@/libs/helpers/callApi";

export const GetEpisodes = async ({ page = 1, pre_page = 10 }) => {
  const res = await CallApi().get(
    `/admin/episodes?page=${page}&item_count=${pre_page}`
  );

  return res?.data;
};
export const getSeasonsForCreateEpisode = async ({url}:{url:string}) => {
  const res = await CallApi().get(url);

  return res.data;
};
export const createEpisode = async (values: any) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  await CallApi().post("/admin/episodes/create", formData);
};
export const updateEpisode = async (episodeId: string, values: any) => {
    const formData = new FormData();
    
    for (let value in values) {
      formData.append(value, values[value]);
    }
    await CallApi().put(`/admin/episodes/edit/${episodeId}`, formData);
};

export const DeleteEpisode = async (episodeId: string) => {
  await CallApi().delete(`/admin/episodes/${episodeId}`);
};
export const getEpisodeForEdit = async ({ url }: { url: string }) => {
  const res = await CallApi().get(url);
  return res?.data;
};
