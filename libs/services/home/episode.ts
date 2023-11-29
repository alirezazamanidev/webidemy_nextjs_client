import { redirect } from "next/navigation";




export async function GetSingleEpisode(courseSlug: string,EpisodeNum:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/episodes/${courseSlug}/${EpisodeNum}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache:'no-store'


  });


  if (res.status === 400) redirect("/not-found");
  return res.json();
}
export async function GetAllCourses({ page = 1, pre_page = 8, sort = '', search = '',category='' }: { page?: number, pre_page?: number, sort?: string, search?: string,category?:string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/courses/filter?page=${page}&pre_page=${pre_page}&sort=${sort}&search=${search}&category=${category}`);


  return res.json();
}
