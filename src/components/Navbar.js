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
    isDrawn,
  } = useStateContext();

  return (
    <div className="info">
      {isOperator ? (
        <p>Operator Mode</p>
      ) : enteredNameComplete ? (
        <p>Welcome {enteredName}</p>
      ) : (
        <p>Welcome</p>
      )}
      <nav>
        {!isOperator && <p>Balance: {userBalance + userWinnings} Tokens</p>}
        {!isOperator && <p>Winnings: {userWinnings} Tokens</p>}
        {isOperator && <p>Price Pot: {pricePot} Tokens</p>}
        {isOperator && <p>Winnings Payed Out: {payedOut} Tokens</p>}
        {isOperator && <p>Profit: {profit} Tokens</p>}
      </nav>
    </div>
  );
};

export default Navbar;
