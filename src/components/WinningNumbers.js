import React from "react";
import "./WinningNumbers.css";
import { useStateContext } from "../context/StateContext";

const WinningNumbers = () => {
  const { winningNumbers } = useStateContext();
  return (
    <div className="winning-container">
      <h1>Winning Numbers</h1>
      <div className="Winning-numbers">
        {winningNumbers.map((number) => (
          <div className="numbers"></div>
        ))}
      </div>
      <button className="winning-btn">Start New Game</button>
    </div>
  );
};

export default WinningNumbers;
