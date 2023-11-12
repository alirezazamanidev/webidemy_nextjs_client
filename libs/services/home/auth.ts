import { CallApi } from "@/libs/helpers/callApi";
import { toast } from "react-toastify";


export default async function sendCodeForauth({phone}:{phone:string}){

     await CallApi().post("auth/local/signIn", {phone});
   
}