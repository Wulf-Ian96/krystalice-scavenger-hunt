import React, { useState } from "react";

import FinalClueInput from "../components/FinalClueInput";
import ClueInput from "../components/clueInput";

export default function Admin({ cluesData, database, collectionRef, storage }) {
  // state for clue input information

  const [isActive, setIsActive] = useState(true);
  const [finalActive, setFinalActive] = useState(false);

  // ----------------- Functions -------------------------

  const toggleHidden = (e) => {
    e.preventDefault();
    setIsActive((prevState) => !prevState);
    setFinalActive((prevState) => !prevState);
  };

  console.log(cluesData);
  // ------------------ End of Functions ----------------------
  return (
    <>
      <ClueInput
        isActive={isActive}
        toggleHidden={toggleHidden}
        collectionRef={collectionRef}
        storage={storage}
        database={database}
        cluesData={cluesData}
      />
      <FinalClueInput finalActive={finalActive} toggleHidden={toggleHidden} />
    </>
  );
}
