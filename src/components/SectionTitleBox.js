import React from "react";
import { Box, Typography } from "@mui/material";

function SectionTitleBox({ text, icon, scrollRef }) {
  return (
    <Box
      sx={{
        width: 250,
        height: 150,
        backgroundColor: "#20195B",
        "&:hover": {
          backgroundColor: "#FFFFFF",
          textColor: "#20195B",
        },
      }}
      onClick={() => scrollRef.current.scrollIntoView()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography fontStyle="bold" fontSize={28}>
        {text}
      </Typography>
      {icon}
    </Box>
  );
}
export default SectionTitleBox;
