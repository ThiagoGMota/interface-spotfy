import Image from "next/image";
import Link from "next/link";

interface albumProps{
    src:string,
    alt:string,
    href:string,
    albumTitle:string,
    artist:string
}

const AlbumCoverHome:React.FC <albumProps> = ({src,alt, href, albumTitle, artist}) => {
    return(
        <Link href={href} className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10">
            <Image
            className="w-full"
                src={src}
                alt={alt}
                width={140}
                height={140}
            />
            <strong className="font-semibold">{albumTitle}</strong>
            <span className="text-sm text-zinc-500">{artist}</span>
        </Link>
    )
}
export default AlbumCoverHome;