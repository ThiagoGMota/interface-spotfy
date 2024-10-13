import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

interface playerProps {
  cover: string;
  alt: string;
  songName: string;
  artist: string;
}

const PlayerClosed: React.FC<playerProps> = ({
  cover,
  alt,
  songName,
  artist,
}) => {
  return (
    <div className="flex justify-between w-full">

      <div className="flex items-center gap-3 ">
            <Image src={cover} alt={alt} width={56} height={56} />
            <div className="flex flex-col">
            <strong className="font-normal">{songName}</strong>
            <span className="text-xs text-zinc-400">{artist}</span>
            </div>
      </div>

      <div className="flex flex-col items-center gap-2 ">

            <div className="flex items-center gap-6">

                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full  text-white">
                    <Shuffle size={20} className="text-zinc-200" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full  text-white">
                    <SkipBack size={20} className="text-zinc-200" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full  bg-white text-black">
                    <Play />
                </button>
                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full  text-white">
                    <SkipForward size={20} className="text-zinc-200" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full  text-white">
                    <Repeat size={20} className="text-zinc-200" />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">16:31</span>
                <div className="h-1 rounded-full w-96 bg-zinc-600">
                    <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-500">1:25:21</span>
            </div>
      </div>
      <div className=" flex items-center gap-2">
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className="flex items-center gap-4">
                <Volume size={20}/>
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                    <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                </div>
                <Maximize2 size={20}/>
            </div>
        </div>
    </div>
  );
};
export default PlayerClosed;
