import * as React from "react";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
const headerAnimation = keyframes`
  0%   { left:0px;}
  25%  {left:25%; }
  50%  {left:50%; }
  75%  { left:75%; }
  100% { left:100%; }
`;
const RotatedBox = styled("div")({
  position: "relative",
  animation: `${headerAnimation} 4s infinite linear`,
});
export default function SlideFromContainer({ name }) {
  return (
    <Box
      sx={{
        height: "20px",
        width: "100%",
        display: "flex",
        padding: 2,
        borderRadius: 1,
        bgcolor: "inherit",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: 200 }}>
        <RotatedBox>
          <div>{name}</div>
        </RotatedBox>
      </Box>
    </Box>
  );
}
