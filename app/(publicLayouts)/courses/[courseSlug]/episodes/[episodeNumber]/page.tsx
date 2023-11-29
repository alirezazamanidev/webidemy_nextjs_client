import { GetSingleEpisode } from "@/libs/services/home/episode";


interface props {
    params:{
        courseSlug:string;
        episodeNumber:string;
    }
}
export default async function SingleEpisodePage({params:{courseSlug,episodeNumber}}:props){
    const data=await GetSingleEpisode(courseSlug,episodeNumber);
    return (
        <>
        
        
        </>
    )
}