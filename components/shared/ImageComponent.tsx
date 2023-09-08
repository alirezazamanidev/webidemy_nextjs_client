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
        <Image src={`api.webidemyyy.ir${url}`} alt={alt} width={width} height={height} className={`${className} w-full`}/>
        </>
    )
}