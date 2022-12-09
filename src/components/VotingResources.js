import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";

const VotingResources = React.forwardRef((props, ref) => {
  const { language } = props;
  const texts = [
    {
      summaryText: languageDictionary.sampleBallotTitle[language],
      detail: languageDictionary.sampleBallotBody[language],
    },
    {
      summaryText: languageDictionary.provisionalVotingTitle[language],
      detail: languageDictionary.provisionalVotingBody[language],
    },
    {
      summaryText:
        languageDictionary.provisionsForVotersWithDisabilitiesTitle[language],
      detail:
        languageDictionary.provisionsForVotersWithDisabilitiesBody[language],
    },
    {
      summaryText: languageDictionary.voterIntimidationTitle[language],
      detail: languageDictionary.voterIntimidationBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.resources[language]}
      dataToDisplay={texts}
      backgroundColor="white"
    />
  );
});

export default VotingResources;
