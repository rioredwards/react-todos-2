import "./catMagic.css";
import { useEffect, useRef, useState } from "react";
import cat1URL from "./assets/cat_1.png";
import cat2URL from "./assets/cat_2.png";
import cat3URL from "./assets/cat_3.png";
import cat4URL from "./assets/cat_4.png";
import cat5URL from "./assets/cat_5.png";
import cat6URL from "./assets/cat_6.png";
import cat7URL from "./assets/cat_7.png";
import cat8URL from "./assets/cat_8.png";

// one thousand milliseconds
const ONE_SECOND = 1000;

function isChosen(chosenNum, catNum) {
  return chosenNum === catNum ? "isChosen" : "that ain't me, babe";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function CatMagic() {
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
    <div className="catImgContainer">
      <img className={"catImg " + isChosen(chosenOne, 1)} src={cat1URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 2)} src={cat2URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 3)} src={cat3URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 4)} src={cat4URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 5)} src={cat5URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 6)} src={cat6URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 7)} src={cat7URL}></img>
      <img className={"catImg " + isChosen(chosenOne, 8)} src={cat8URL}></img>
    </div>
  );
}
