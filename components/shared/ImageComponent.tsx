import Image from "next/image";

interface props {
    url:string,
    alt:string
    width:number
    height:number
    className?:string
}
export default function ImageComponent({url,alt,width,height,className}:props){

   
    return (
        <>
        <Image src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`} alt={alt} width={width} height={height} className={`${className} w-full`}/>
        </>
    )
}