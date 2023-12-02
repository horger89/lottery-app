import React from "react";
import "./WinningNumbers.css";
import { useStateContext } from "../context/StateContext";

const WinningNumbers = () => {
  const { winningNumbers, NewGameHAndler } = useStateContext();
  return (
    <div className="winning-container">
      <h1>Winning Numbers</h1>
      <div className="winning-numbers">
        <div className="numbers">{winningNumbers[0]}</div>
        <div className="numbers">{winningNumbers[1]}</div>
        <div className="numbers">{winningNumbers[2]}</div>
        <div className="numbers">{winningNumbers[3]}</div>
        <div className="numbers">{winningNumbers[4]}</div>
      </div>
      <button onClick={NewGameHAndler} className="winning-btn">
        Start New Game
      </button>
    </div>
  );
};

export default WinningNumbers;
