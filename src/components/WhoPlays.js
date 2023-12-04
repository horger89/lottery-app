import React from "react";
import "./WhoPlays.css";
import { useStateContext } from "../context/StateContext";
import UserName from "./UserName";

const Player = () => {
  const { setIsOperator, enteredNameComplete, setIsOperatorStored } =
    useStateContext();
  const UserHandler = () => {
    setIsOperator(false);
    setIsOperatorStored(false);
  };
  const OperatorHandler = () => {
    setIsOperator(true);
    setIsOperatorStored(true);
  };
  return (
    <div>
      {!enteredNameComplete && <UserName />}
      <div className="options">
        <button onClick={UserHandler} className="btn-who">
          User
        </button>
        <button onClick={OperatorHandler} className="btn-who">
          Operator
        </button>
      </div>
    </div>
  );
};

export default Player;
