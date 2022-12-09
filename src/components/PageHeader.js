import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import LanguageSelector from "./shared/LanguageSelector";
import { languageDictionary } from "../LanguageDictionary";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MailIcon from "@mui/icons-material/Mail";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import DropOffLetterIcon from "../Icons/DropOffLetterIcon.svg";

function PageHeader({
  language,
  setLanguage,
  registerToVoteRef,
  voteInPersonRef,
  voteByMailRef,
  dropOffBallotRef,
  electionResourcesRef,
  electionResultRef,
}) {
  // Render the page header.
  // Composed of multiple buttons when that trigger a scroll to their respective Refs when clicked
  return (
    <Card
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(117, 119, 243, 0.15)",
      }}
    >
      <CardContent style={{ marginTop: 50 }}>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => registerToVoteRef.current.scrollIntoView()}
            >
              {languageDictionary.registerToVote[language]}
              <PersonAddAlt1Icon
                fontSize="large"
                style={{ marginLeft: "5%" }}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => voteInPersonRef.current.scrollIntoView()}
            >
              {languageDictionary.voteInPerson[language]}
              <img
                style={{ height: "35px", marginLeft: "5%" }}
                src={DropOffLetterIcon}
                alt="Drop off letter"
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => voteByMailRef.current.scrollIntoView()}
            >
              {languageDictionary.voteByMail[language]}
              <MailIcon fontSize="large" style={{ marginLeft: "5%" }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => dropOffBallotRef.current.scrollIntoView()}
            >
              {languageDictionary.dropOffYourBallot[language]}
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{ marginLeft: "5%" }}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => electionResourcesRef.current.scrollIntoView()}
            >
              {languageDictionary.resources[language]}
              <HandshakeIcon
                fontSize="large"
                style={{ marginLeft: "5%", marginTop: 14 }}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#20195B" }}
              onClick={() => electionResultRef.current.scrollIntoView()}
            >
              {languageDictionary.electionResults[language]}
              <EqualizerIcon fontSize="large" style={{ marginLeft: "5%" }} />
            </Button>
          </Grid>
          <LanguageSelector
            style={{ alignContent: "flex-end" }}
            language={language}
            setLanguage={setLanguage}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PageHeader;
