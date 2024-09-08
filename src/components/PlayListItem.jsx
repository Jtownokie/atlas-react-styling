// Playlist Item Component

export default function PlayListItem(props) {
  return (
    <div className="mb-1 flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <p className="text-sm font-medium">{props.title}</p>
        <p className="text-sm font-medium text-slate-500">{props.artist}</p>
      </div>
      <p className="text-sm font-medium text-slate-400">{props.songLength}</p>
    </div>
  );
}
