import Image from "next/image";
import defaultAvatar from '@/public/images/photo/avatarDefalt.webp'

interface props {
    url?:string
    width:number
    height:number;
    className?:string
}
export default function AvatarUser({url,width,height,className}:props){

    return (
        <>
        {
            url ? (
                <Image src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`} width={width}
                 alt="avatr"
                 height={height}
                 className={className}
                 />
            ):<Image alt="defaltAvatar" src={defaultAvatar} className={className} width={width} height={height}/>
        }
        </>       
    )

}