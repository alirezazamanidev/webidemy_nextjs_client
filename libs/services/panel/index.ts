import CallApi from "@/libs/helpers/callApi"

export const getUserPayments=async()=>{

    const res= await CallApi().get('/user/panel/history');
    return res?.data;
}