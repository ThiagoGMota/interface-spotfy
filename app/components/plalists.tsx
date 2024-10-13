import Link from "next/link";

interface playlistProps{
    href:string,
    title:string
}

const Playlist:React.FC <playlistProps> = ({href, title}) => {
    return(
        <Link
            className='text-sm  hover:text-zinc-100'
            href={href}
        >
            {title}
        </Link>
    )
}
export default Playlist;