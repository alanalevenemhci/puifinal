import React from "react";
import { Grid } from "@mui/material";
import InfoAccordion from "./InfoAccordion";

// This component renders each of the info sections (E.g. Voting by Mail)
// It is re-used
// It takes in the data which contains the individual dropdown titles and body text
// And creates an Array of InfoAccordions (another custom component)
const BodySection = React.forwardRef((props, ref) => {
  const { sectionTitle, dataToDisplay, backgroundColor } = props;
  const sectionsToDisplay = dataToDisplay.map(({ summaryText, detail }) => {
    return <InfoAccordion summaryText={summaryText} detail={detail} />;
  });
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: backgroundColor, marginTop: "20px" }}
      >
        <h1
          ref={ref}
          style={{
            color: "#20195B",
            marginTop: "4px",
          }}
        >
          {sectionTitle}
        </h1>
        {sectionsToDisplay}
      </Grid>
    </>
  );
});

export default BodySection;
