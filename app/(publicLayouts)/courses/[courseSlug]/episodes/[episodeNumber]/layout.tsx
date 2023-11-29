import { GetSingleEpisode } from "@/libs/services/home/episode";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params: { episodeNumber,courseSlug },
}: {
  params: { courseSlug: string ,episodeNumber:string}
}) {


  const data =await GetSingleEpisode(courseSlug,episodeNumber);
  if(!data.episode){
    notFound();
  }
 
  return {
    title:`${data.episode.title} | ${data.episode.season.course.title}`,
    description:data.episode.title
  };
}
export default function SingleCourseInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
