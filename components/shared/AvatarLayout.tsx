import Image from "next/image";
import defaultAvatar from '@/public/images/photo/avatarDefalt.webp'

interface props {
    url?:string
    width:number
    height:number;
    className?:string
    alt?:string;
}
export default function AvatarUser({url,width,height,className,alt}:props){

    return (
        <>
        {
            url ? (
                <Image src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`} width={width}
                 alt={alt ? alt :'avatar'}
                 height={height}
                 className={className}
                 />
            ):<Image alt="defaltAvatar" src={defaultAvatar} className={className} width={width} height={height}/>
        }
        </>       
    )

}