import React from "react";
import { Typography } from "@mui/material";

function UnderlinedLink({ link, text }) {
  return (
    <a href={link}>
      <Typography display="underline">{text}</Typography>
    </a>
  );
}

export default UnderlinedLink;
