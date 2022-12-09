import React from "react";
import { Grid } from "@mui/material";
import VotingInformation from "./VotingInformation";
import VoteInPerson from "./VoteInPerson";
import VoteByMail from "./VoteByMail";
import DropOffYourBallot from "./DropOffYourBallot";
import VotingResources from "./VotingResources";
import ElectionResults from "./ElectionResults";
import { languageDictionary } from "../LanguageDictionary";

function BodySections({
  language,
  registerToVoteRef,
  voteInPersonRef,
  voteByMailRef,
  dropOffBallotRef,
  electionResourcesRef,
  electionResultRef,
}) {
  // Renders the information sections of the page
  // Each of the components is very similar.
  // They take in a ref (for scrolling) and language to determine which text to show.
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <VotingInformation ref={registerToVoteRef} language={language} />
        <VoteInPerson ref={voteInPersonRef} language={language} />
        <VoteByMail ref={voteByMailRef} language={language} />
        <DropOffYourBallot ref={dropOffBallotRef} language={language} />
        <VotingResources ref={electionResourcesRef} language={language} />
        <ElectionResults ref={electionResultRef} language={language} />
      </Grid>
      {languageDictionary.sources[language]}:
      <ul>
        <li>
          <a href="www.vote411.org">www.vote411.org</a>
        </li>
        <li>
          <a href="www.pavoterservices.pa.gov/">www.pavoterservices.pa.gov/</a>
        </li>
        <li>
          <a href="www.vote.pa.gov">www.vote.pa.gov</a>
        </li>
        <li>
          <a href="wwww.rockthevote.org/">www.rockthevote.org</a>
        </li>
      </ul>
    </>
  );
}

export default BodySections;
