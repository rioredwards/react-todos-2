import "./mooseMagic.css";
import { useEffect, useRef, useState } from "react";
import moose1URL from "./assets/moose_1.png";
import moose2URL from "./assets/moose_2.png";
import moose3URL from "./assets/moose_3.png";
import moose4URL from "./assets/moose_4.png";
import moose5URL from "./assets/moose_5.png";
import moose6URL from "./assets/moose_6.png";
import moose7URL from "./assets/moose_7.png";
import moose8URL from "./assets/moose_8.png";

// one thousand milliseconds
const ONE_SECOND = 1000;

function isChosen(chosenNum, mooseNum) {
  return chosenNum === mooseNum ? "isChosen" : "that ain't me, babe";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function MooseMagic() {
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
    <div className="mooseImgContainer">
      <img className={"mooseImg " + isChosen(chosenOne, 1)} src={moose1URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 2)} src={moose2URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 3)} src={moose3URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 4)} src={moose4URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 5)} src={moose5URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 6)} src={moose6URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 7)} src={moose7URL}></img>
      <img className={"mooseImg " + isChosen(chosenOne, 8)} src={moose8URL}></img>
    </div>
  );
}
