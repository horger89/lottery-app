import React from "react";
import "./Navbar.css";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {
    isOperator,
    enteredName,
    enteredNameComplete,
    userBalance,
    userWinnings,
    pricePot,
    profit,
    payedOut,
  } = useStateContext();

  return (
    <div className="info">
      {isOperator ? (
        <p>Operator</p>
      ) : enteredNameComplete ? (
        <p>Welcome {enteredName}</p>
      ) : (
        <p>Welcome</p>
      )}
      <nav>
        {!isOperator && <p>Balance: {userBalance + userWinnings}</p>}
        {!isOperator && <p>Winnings: {userWinnings}</p>}
        {isOperator && <p>Price Pot: {pricePot}</p>}
        {isOperator && <p>Payed Out: {payedOut}</p>}
        {isOperator && <p>Profit: {profit}</p>}
      </nav>
    </div>
  );
};

export default Navbar;
