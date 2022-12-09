import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

// The InfoAccordion component is used to render the individual Dropdown boxes ie Accordions
// It takes in a summaryText (title text) and detail (body text) and puts them in an Accordion with the
// appropriate colors and styling

function InfoAccordion({ summaryText, detail }) {
  return (
    <Accordion
      style={{
        width: "80%",
        backgroundColor: "white",
        border: "solid",
        borderWidth: "4px",
        borderColor: "#7577F3",
        marginTop: "8px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined style={{ color: "#2D2772" }} />}
        id="panel1a-header"
      >
        <Typography fontSize={24} style={{ color: "#2D2772" }}>
          {summaryText}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ color: "#20195B" }}>{detail}</AccordionDetails>
    </Accordion>
  );
}

export default InfoAccordion;
