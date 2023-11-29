import ReactPlayer from 'react-player/lazy'
interface props {
  videoUrl:string;
  width:string;
  height:string;
  hasControls?:boolean
}
export default function PlayerLayout({videoUrl,width,height,hasControls=true}:props) {

  return (
    <>
    <ReactPlayer url={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${videoUrl}`}
     width={width}
     height={height}
     controls={hasControls}
     style={{borderRadius:'20px'}}
    />
    </>
  )
}
