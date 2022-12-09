import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";

const VotingInformation = React.forwardRef((props, ref) => {
  const { language } = props;
  const votingInfoTexts = [
    {
      summaryText: languageDictionary.votingEligibilityTitle[language],
      detail: languageDictionary.votingEligibilityBody[language],
    },
    {
      summaryText: languageDictionary.registrationDeadlineTitle[language],
      detail: languageDictionary.registrationDeadlineBody[language],
    },
    {
      summaryText: languageDictionary.registerToVoteTitle[language],
      detail: languageDictionary.registerToVoteBody[language],
    },
    {
      summaryText: languageDictionary.checkYourVoterRegistrationTitle[language],
      detail: languageDictionary.checkYourVoterRegistrationBody[language],
    },
    {
      summaryText: languageDictionary.changeYourNameOrAddressTitle[language],
      detail: languageDictionary.changeYourNameOrAddressBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.registerToVote[language]}
      dataToDisplay={votingInfoTexts}
      backgroundColor="white"
    />
  );
});

export default VotingInformation;
