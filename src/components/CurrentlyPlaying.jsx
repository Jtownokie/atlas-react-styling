// Currently Playing Component
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col w-1/2 sm:w-full p-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
