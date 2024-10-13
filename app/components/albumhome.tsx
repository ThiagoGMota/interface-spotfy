import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface albumProps{
    href:string,
    src:string,
    alt:string,
    albumName:string
}

const AlbumHome:React.FC<albumProps> = ({href,src,alt,albumName}) => {
    return(
        <Link
            href={href} 
            className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
        >
            <Image
                src={src}
                alt={alt}
                width={104}
                height={104}
            />
            <div className=" overflow-hidden w-36">
                <strong>{albumName}</strong>
            </div>
            <button className='invisible group-hover:visible w-12 h-12  rounded-full bg-green-400 flex items-center justify-center pl-0.1 text-black ml-auto mr-8'>
                <Play/>
            </button>
        </Link>
    )
}
export default AlbumHome;