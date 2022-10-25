import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/usePlayerProvider";
import PauseIcon from "@mui/icons-material/Pause";
export default function Controller() {
  const { playPreviousTrack, playNextTrack, isPlaying, togglePlay } =
    useMusicPlayer();
  return (
    <Paper>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Previous"
          onClick={playPreviousTrack}
          icon={<SkipPreviousIcon />}
        />
        <BottomNavigationAction
          onClick={togglePlay}
          label={isPlaying ? "Pause" : "Play"}
          icon={isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
        />
        <BottomNavigationAction
          label="Next"
          onClick={playNextTrack}
          icon={<SkipNextIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
