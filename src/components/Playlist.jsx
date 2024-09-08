// Playlist Component
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="flex flex-col w-1/2 sm:w-full p-6 border-l">
      <h2 className="font-semibold mb-4 text-lg">Playlist</h2>
      <div className="flex flex-col pr-4">
        <PlayListItem title="Painted in Blue" artist="Soul Canvas" songLength="5:55"/>
        <PlayListItem title="Tidal Drift" artist="Echoes of the Sea" songLength="8:02"/>
        <PlayListItem title="Fading Shadows" artist="The Emberlight" songLength="3:01"/>
        <PlayListItem title="Cosmic Drift" artist="Solar Flare" songLength="5:01"/>
        <PlayListItem title="Urban Serenade" artist="Midnight Groove" songLength="4:54"/>
        <PlayListItem title="Whispers in the Wind" artist="Rust & Ruin" songLength="6:13"/>
        <PlayListItem title="Electric Fever" artist="Neon Jungle" songLength="8:41"/>
        <PlayListItem title="Edge of the Abyss" artist="Steel Horizon" songLength="2:27"/>
        <PlayListItem title="Golden Haze" artist="Velvet Waves" songLength="3:15"/>
        <PlayListItem title="Shatter the Silence" artist="Thunderclap Echo" songLength="8:22"/>
      </div>
    </div>
  );
}
