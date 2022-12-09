import PageHeader from "./components/PageHeader";
import { useRef, useState } from "react";
import BodySections from "./components/BodySections";
import HeaderLogo from "./components/HeaderLogo";

function App() {
  // language and setLanguage are pieces of React state
  // that are used to determine which language is being displayed
  const [language, setLanguage] = useState("en");

  // refs provide a way to refer to specific components in the App
  // Used for scrolling to individual sections components
  const registerToVoteRef = useRef(null);
  const voteInPersonRef = useRef(null);
  const voteByMailRef = useRef(null);
  const dropOffBallotRef = useRef(null);
  const electionResourcesRef = useRef(null);
  const electionResultRef = useRef(null);

  // What gets returned in a returned here is rendered in the App
  return (
    <div>
      <HeaderLogo language={language} />
      <PageHeader
        language={language}
        setLanguage={setLanguage}
        registerToVoteRef={registerToVoteRef}
        voteInPersonRef={voteInPersonRef}
        voteByMailRef={voteByMailRef}
        dropOffBallotRef={dropOffBallotRef}
        electionResourcesRef={electionResourcesRef}
        electionResultRef={electionResultRef}
      />
      <BodySections
        language={language}
        registerToVoteRef={registerToVoteRef}
        voteInPersonRef={voteInPersonRef}
        voteByMailRef={voteByMailRef}
        dropOffBallotRef={dropOffBallotRef}
        electionResourcesRef={electionResourcesRef}
        electionResultRef={electionResultRef}
      />
    </div>
  );
}

export default App;
