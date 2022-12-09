import React from "react";
import PennVotesEnglishLogo from "../images/pennvotesenglish.svg";
import PennVotesSpanishLogo from "../images/pennvotesspanish.svg";

// This component stores the PennVotes logo and switches to english or spanish depending on the language
// the app is currently using
function HeaderLogo({ language }) {
  const pennVotesLogo =
    language === "en" ? PennVotesEnglishLogo : PennVotesSpanishLogo;

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 20,
        marginTop: 10,
        width: "100%",
      }}
    >
      <img
        src={pennVotesLogo}
        style={{ borderStyle: "none", borderWidth: 0, maxWidth: "100%" }}
        alt="PennVotes logo with description"
      />
    </div>
  );
}

export default HeaderLogo;
