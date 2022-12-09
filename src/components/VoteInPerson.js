import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";
import { opaqueLavender } from "../constants/colors";

const VoteInPerson = React.forwardRef((props, ref) => {
  const { language } = props;
  const voteInPersonTexts = [
    {
      summaryText: languageDictionary.voteInPersonEarlyTitle[language],
      detail: languageDictionary.voteInPersonEarlyBody[language],
    },
    {
      summaryText: languageDictionary.voteInPersonElectionDayTitle[language],
      detail: languageDictionary.voteInPersonElectionDayBody[language],
    },
    {
      summaryText: languageDictionary.whatToExpectAtPollingPlaceTitle[language],
      detail: languageDictionary.whatToExpectAtPollingPlaceBody[language],
    },
    {
      summaryText: languageDictionary.idRequirementsTitle[language],
      detail: languageDictionary.idRequirementsBody[language],
    },
    {
      summaryText: languageDictionary.pollingPlaceHoursTitle[language],
      detail: languageDictionary.pollingPlaceHoursBody[language],
    },
    {
      summaryText: languageDictionary.canIVoteInPersonTitle[language],
      detail: languageDictionary.canIVoteInPersonBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.voteInPerson[language]}
      dataToDisplay={voteInPersonTexts}
      backgroundColor={opaqueLavender}
    />
  );
});

export default VoteInPerson;
