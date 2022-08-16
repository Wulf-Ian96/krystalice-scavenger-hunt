import React, { useState, useEffect } from "react";
import ClueCard from "../components/ClueCard";
import FinalCard from "../components/FinalCard";

// import { clueData } from "../clueData";

export default function Home({ cluesData, finalClue }) {
  const [currCard, setCurrCard] = useState(0);
  const [clueInput, setClueInput] = useState("");

  const counter = cluesData.length;
  console.log(cluesData);

  return (
    <div className="app-container">
      {counter !== currCard ? (
        <ClueCard
          cluesData={cluesData}
          clueInput={clueInput}
          setClueInput={setClueInput}
          currCard={currCard}
          setCurrCard={setCurrCard}
        />
      ) : (
        <FinalCard
          finalClue={finalClue}
          clueInput={clueInput}
          setClueInput={setClueInput}
        />
      )}
    </div>
  );
}
