import { CallApi } from "@/libs/helpers/callApi";
import { useQuery } from "react-query";

export default function GetAllMarkBookedBlogs(){

     const {data,isLoading}=useQuery(['getAllBookmarkedBlogs'],async()=>
     {
          return (await CallApi().get('users/blogs/bookmarked')).data;

     },{
          refetchOnMount:false
     })
   return {data,isLoading}
}