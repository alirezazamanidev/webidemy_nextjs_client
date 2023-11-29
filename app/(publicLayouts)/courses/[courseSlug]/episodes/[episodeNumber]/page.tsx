import HeaderSingleEpisode from "@/components/public/episode/HeaderSingleEpisode";
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
        <section className=" container mx-auto my-10 ">
            <HeaderSingleEpisode episode={data}/>
        </section>
        
        </>
    )
}