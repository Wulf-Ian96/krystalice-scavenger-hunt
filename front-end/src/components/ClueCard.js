import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import clueData from "../clueData";
//import your images for the cards---- syntax : import from "../images/imageName.jpg/png" have to point to the directory of the image folder

//----------------end of importing

export default function ClueCard() {
  const [clueInput, setClueInput] = useState("");
  const [currCard, setCurrCard] = useState(0);

  const handleNext = () => {
    if (clueInput == clueData[currCard].cluePassword) {
      alert("good guess!");
      setTimeout(() => setCurrCard((prevState) => prevState + 1), 1000);
    } else {
      alert("try again");
    }
  };
  const handlePrev = () => {
    setCurrCard((prevState) => prevState - 1);
  };

  console.log(clueInput);
  return (
    <div className="card-container">
      <button className="btn" onClick={handlePrev}>
        {" "}
        <ArrowBackIosIcon />
      </button>
      {clueData.map((clue, index) => (
        <div
          className="clue-container"
          style={{ display: index === currCard ? "grid" : "none" }}
        >
          <h1 className="title">{clue.clueNum}</h1>
          <a className="clue-img" href={clue.clueLink}>
            <img className="clue-img" src={clue.clueImg} />
          </a>
          <p className="clue-text">{clue.clueTxt}</p>

          <input
            className="clue-input"
            onChange={(e) => setClueInput(e.target.value)}
            value={clueInput}
          ></input>
          <button className="submit-btn" onClick={handleNext}>
            Submit
          </button>
        </div>
      ))}
      <button className="btn" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}
