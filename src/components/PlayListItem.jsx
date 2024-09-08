// Playlist Item Component

export default function PlayListItem(props) {
  return (
    <button>
      <div>
        <p>{props.title}</p>
        <p>{props.artist}</p>
      </div>
      <p>{props.songLength}</p>
    </button>
  );
}
