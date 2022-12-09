import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";
import { opaqueLavender } from "../constants/colors";

const ElectionResults = React.forwardRef((props, ref) => {
  const { language } = props;
  const texts = [
    {
      summaryText: languageDictionary.ballotDropBoxesTitle[language],
      detail: languageDictionary.ballotDropBoxesBody[language],
    },
    {
      summaryText:
        languageDictionary.whereCanISeeElectionResultsTitle[language],
      detail: languageDictionary.whereCanISeeElectionResultsBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.electionResults[language]}
      dataToDisplay={texts}
      backgroundColor={opaqueLavender}
    />
  );
});

export default ElectionResults;
