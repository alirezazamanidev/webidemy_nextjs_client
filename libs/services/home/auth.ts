import { CallApi } from "@/libs/helpers/callApi";
export default async function sendCodeForauth({phone}:{phone:string}){

     await CallApi().post("auth/local/signIn", {phone});
   
}