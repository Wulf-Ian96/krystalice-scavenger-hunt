import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//import your images for the cards---- syntax : import from "../images/imageName.jpg/png" have to point to the directory of the image folder

//----------------end of importing

export default function ClueCard({
  currCard,
  setCurrCard,
  clueInput,
  setClueInput,
  cluesData,
}) {
  console.log(cluesData);
  const counter = cluesData.length;

  const currIndex = cluesData[currCard];

  const handleNext = () => {
    if (
      clueInput === cluesData[currCard].cluePassword &&
      counter >= currIndex.clueNum
    ) {
      alert("good guess!");
      setTimeout(
        () =>
          counter >= currCard
            ? setCurrCard((prevState) => prevState + 1)
            : setCurrCard((prevState) => prevState + 0),
        1000
      );
    } else {
      alert("try again");
    }
  };
  const handlePrev = () => {
    setCurrCard((prevState) => prevState - 1);
  };

  return (
    <div className="card-container">
      <button className="btn" onClick={handlePrev}>
        {" "}
        <ArrowBackIosIcon />
      </button>
      {cluesData.map((clue, index) => (
        <div
          className="clue-container"
          key={clue.id}
          style={{ display: index === currCard ? "grid" : "none" }}
        >
          <h1 className="title">{clue.clueNum}</h1>
          <a className="clue-img" href={clue.clueLink}>
            <img
              className="clue-img"
              src={clue.clueImage}
              alt=" clue  / link to google maps"
            />
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
