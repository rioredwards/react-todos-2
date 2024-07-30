import "./gooseMagic.css";
import { useEffect, useRef, useState } from "react";
import goose1URL from "./assets/goose_1.png";
import goose2URL from "./assets/goose_2.png";
import goose3URL from "./assets/goose_3.png";
import goose4URL from "./assets/goose_4.png";
import goose5URL from "./assets/goose_5.png";
import goose6URL from "./assets/goose_6.png";
import goose7URL from "./assets/goose_7.png";
import goose8URL from "./assets/goose_8.png";

// one thousand milliseconds
const ONE_SECOND = 1000;

function isChosen(chosenNum, gooseNum) {
  return chosenNum === gooseNum ? "isChosen" : "that ain't me, babe";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function GooseMagic() {
  const [chosenOne, setChosenOne] = useState(-1);
  const intervalId = useRef(undefined);
  const lastIntervalHadChosenOne = useRef(false);

  useEffect(() => {
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      const randomNum = getRandomNum(-3, 13);
      if (randomNum >= 0 && randomNum <= 8 && !lastIntervalHadChosenOne.current) {
        setChosenOne(randomNum);
        lastIntervalHadChosenOne.current = true;
      } else {
        setChosenOne(-1);
        lastIntervalHadChosenOne.current = false;
      }
    }, ONE_SECOND * 5);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="gooseImgContainer">
      <img className={"gooseImg " + isChosen(chosenOne, 1)} src={goose1URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 2)} src={goose2URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 3)} src={goose3URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 4)} src={goose4URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 5)} src={goose5URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 6)} src={goose6URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 7)} src={goose7URL}></img>
      <img className={"gooseImg " + isChosen(chosenOne, 8)} src={goose8URL}></img>
    </div>
  );
}
