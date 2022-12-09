import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";

const VoteByMail = React.forwardRef((props, ref) => {
  const { language } = props;
  const voteByMailTexts = [
    {
      summaryText: languageDictionary.howToVoteByMailTitle[language],
      detail: languageDictionary.howToVoteByMailBody[language],
    },
    {
      summaryText: languageDictionary.ballotTrackingTitle[language],
      detail: languageDictionary.ballotTrackingBody[language],
    },
    {
      summaryText: languageDictionary.eligibility[language],
      detail: languageDictionary.eligibilityVotingBody[language],
    },
    {
      summaryText: languageDictionary.emergencyAbsenteeBallotsTitle[language],
      detail: languageDictionary.emergencyAbsenteeBallotsBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.voteByMail[language]}
      dataToDisplay={voteByMailTexts}
      backgroundColor="white"
    />
  );
});

export default VoteByMail;
