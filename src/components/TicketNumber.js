import React from "react";
import "./TicketNumber.css";
import { useStateContext } from "../context/StateContext";

const TicketNumber = ({ number }) => {
  const { winningNumbers } = useStateContext();
  const checkWinningNumbers = winningNumbers.includes(number);
  return (
    <div>
      {checkWinningNumbers ? (
        <div className="winning-number">{number}</div>
      ) : (
        <div className="ticket-number">{number}</div>
      )}
    </div>
  );
};

export default TicketNumber;
