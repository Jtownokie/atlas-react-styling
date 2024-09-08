// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row mx-auto h-full w-full max-w-4xl shadow-lg">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
