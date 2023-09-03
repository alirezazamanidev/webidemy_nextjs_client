"use client";
import CreateEpisodeForm from "@/libs/forms/admin/episode/createform";
import { useRouter } from "next/navigation";
const CreateEpisodePage = () => {
  const router = useRouter();

  return (<>
  <main>

    <CreateEpisodeForm router={router}/>

  </main>
  
   </>);
};

export default CreateEpisodePage;
