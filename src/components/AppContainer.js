import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import TrackList from "./TrackList";
import Controller from "./Controller";
import useMusicPlayer from "../hooks/usePlayerProvider";
import SlideFromContainer from "./SlideCom";
export default function AppContainer() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        position: "absolute",
        boxSizing: "border-box",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "260px",
          height: "auto",
          margin: "auto",
          borderRadius: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            backgroundColor: "#EDE3F1",
          }}
        >
          <SlideFromContainer name={currentTrackName} />

          <TrackList />
        </CardContent>
        <CardContent
          sx={{
            width: "100%",
            padding: 0,
            position: "relative",
            bottom: 0,
          }}
        >
          <Controller />
        </CardContent>
      </Card>
    </div>
  );
}
