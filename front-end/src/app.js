import React, { useState } from "react";
import ClueCard from "./components/ClueCard";
import FinalCard from "./components/FinalCard";
import { clueData } from "./clueData";

export default function App() {
  const [currCard, setCurrCard] = useState(0);
  const [clueInput, setClueInput] = useState("");
  const counter = clueData.length;
  return (
    <div className="app-container">
      {counter !== currCard ? (
        <ClueCard
          clueInput={clueInput}
          setClueInput={setClueInput}
          currCard={currCard}
          setCurrCard={setCurrCard}
        />
      ) : (
        <FinalCard clueInput={clueInput} setClueInput={setClueInput} />
      )}
    </div>
  );
}
