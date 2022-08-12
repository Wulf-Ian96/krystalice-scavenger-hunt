import React, { useState } from "react";
import ClueCard from "../components/ClueCard";
import FinalCard from "../components/FinalCard";
import { Link } from "react-router-dom";
// import { clueData } from "../clueData";

export default function Home({ cluesData }) {
  const [currCard, setCurrCard] = useState(0);
  const [clueInput, setClueInput] = useState("");
  const counter = cluesData.length;
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
        <FinalCard clueInput={clueInput} setClueInput={setClueInput} />
      )}
    </div>
  );
}
