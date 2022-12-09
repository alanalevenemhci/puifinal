import React from "react";
import { languageDictionary } from "../LanguageDictionary";
import BodySection from "./shared/BodySection";
import { opaqueLavender } from "../constants/colors";

const DropOffYourBallot = React.forwardRef((props, ref) => {
  const { language } = props;
  const texts = [
    {
      summaryText: languageDictionary.ballotDropBoxesTitle[language],
      detail: languageDictionary.ballotDropBoxesBody[language],
    },
  ];

  return (
    <BodySection
      ref={ref}
      sectionTitle={languageDictionary.dropOffYourBallot[language]}
      dataToDisplay={texts}
      backgroundColor={opaqueLavender}
    />
  );
});

export default DropOffYourBallot;
