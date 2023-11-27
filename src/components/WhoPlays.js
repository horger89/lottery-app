import React from "react";
import "./WhoPlays.css";
import { useStateContext } from "../context/StateContext";
import UserName from "./UserName";

const Player = () => {
  const { setIsOperator, enteredNameComplete } = useStateContext();
  return (
    <div>
      {!enteredNameComplete && <UserName />}
      <div className="options">
        <button onClick={() => setIsOperator(false)} className="btn">
          User
        </button>
        <button onClick={() => setIsOperator(true)} className="btn">
          Operator
        </button>
      </div>
    </div>
  );
};

export default Player;
