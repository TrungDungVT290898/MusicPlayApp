import { Button } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import useMusicPlayer from "../hooks/usePlayerProvider";
import PauseIcon from "@mui/icons-material/Pause";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();
  const onPlayMusicClick = (index) => {
    console.log(`user click play track ${index}`);
    playTrack(index);
  };
  return (
    <div
      style={{
        backgroundColor: "#D3BBDD",
        position: "relative",
        left: 0,
        width: "90%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "10px",
      }}
    >
      {trackList.map((track, index) => (
        <Button
          onClick={(e) => onPlayMusicClick(index)}
          sx={{
            color: "black",
            backgroundColor: "#EDE3F1",
            width: "80%",
            borderRadius: "10px",
            marginBottom: "10px",
            fontSize: "8px",
            display: "flex",
            justifyContent: "start",
            verticalAlign: "center",
          }}
        >
          {currentTrackName === track.name && isPlaying ? (
            <PauseIcon />
          ) : (
            <HeadphonesIcon
              sx={{
                color: "black",
              }}
            />
          )}
          {track.name}
        </Button>
      ))}
    </div>
  );
};

export default TrackList;
