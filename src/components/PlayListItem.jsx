// Playlist Item Component

export default function PlayListItem(props) {
  return (
    <div className="flex flex-row items-center justify-between mb-1">
      <div className="flex flex-col">
        <p className="font-medium text-sm">{props.title}</p>
        <p className="text-slate-500 text-sm font-medium">{props.artist}</p>
      </div>
      <p className="text-slate-400 text-sm font-medium">{props.songLength}</p>
    </div>
  );
}
