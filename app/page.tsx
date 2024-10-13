import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AlbumHome from "./components/albumhome";
import Playlist from "./components/plalists";
import AlbumCoverHome from "./components/albumCoverHome";
import PlayerClosed from "./components/player";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <Link
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </Link>
            <Link
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </Link>
            <Link
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </Link>
          </nav>

          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <Playlist href="#" title="Classico" />
            <Playlist href="#" title="Favorito" />
            <Playlist href="#" title="Pop" />
            <Playlist href="#" title="Eletronica" />
            <Playlist href="#" title="Catolica" />
            <Playlist href="#" title="Trilhas sonoras" />
            <Playlist href="#" title="Animes" />
            <Playlist href="#" title="Lofi" />
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3 ">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <AlbumHome
              albumName='Beethoven Symphony no.6 - "Pastoral"'
              src="/beethoven.jpg"
              alt="beethoven cover"
              href="#"
            />
            <AlbumHome
              albumName="Batman Arkhan knight"
              src="/batman.jpg"
              alt="batman cover"
              href="#"
            />
            <AlbumHome
              albumName="Miserere mei "
              src="/catholic.jpg"
              alt="catholic cover"
              href="#"
            />
            <AlbumHome
              albumName="Slash"
              src="/rock.jpg"
              alt="rock cover"
              href="#"
            />
            <AlbumHome
              albumName="Lindsey Stirling"
              src="/pop.jpg"
              alt="pop cover"
              href="#"
            />
            <AlbumHome
              albumName="Tomorrowland 2023"
              src="/tomorrowland.jpg"
              alt="tomorrowland cover"
              href="#"
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for you</h2>
          <div className=" grid grid-cols-6 gap-4 mt-4">
            <AlbumCoverHome
            href="#"
              src='/tomorrowland.jpg' 
              alt="tomorrowland cover" 
              albumTitle="Tomorrowland 2013"
              artist="Various artists"
            />  
            <AlbumCoverHome
            href="#"
              src='/pop.jpg' 
              alt="pop cover" 
              albumTitle="Brave Enough"
              artist="Lindsey Stirling"
            />  
            <AlbumCoverHome
            href="#"
              src='/beethoven.jpg' 
              alt="beethoven cover" 
              albumTitle="Great Symphonys"
              artist="L. V. Beethoven"
            />  
            <AlbumCoverHome
            href="#"
              src='/catholic.jpg' 
              alt="catholic cover" 
              albumTitle="Miserere mei"
              artist="Unknown"
            />  
            <AlbumCoverHome
            href="#"
              src='/rock.jpg' 
              alt="rock cover"
              albumTitle="Slash" 
              artist="Slash"
            />  
          </div> 

        </main>
      </div>

      <footer className="fixed w-full bottom-0 flex items-center justify-between bg-zinc-800 border-t border-zinc-700 px-6 py-4">
        <PlayerClosed
          cover="/beethoven.jpg"
          alt="beethoven album cover"  
          songName="Symphony no. 5"
          artist="Vienna's symphonic orchestra"
        />
      </footer>
    </div>
  );
}
