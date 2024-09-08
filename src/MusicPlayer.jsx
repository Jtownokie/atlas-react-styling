// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col shadow-lg md:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
