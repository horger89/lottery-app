import React, { useEffect, useState } from "react";
import "./SubmitedTicket.css";
import TicketNumber from "./TicketNumber";
import { useStateContext } from "../context/StateContext";

const SingleTicket = ({ ticket, user, id }) => {
  const {
    winningNumbers,
    isDrawn,
    payOuts,
    organizedArray,
    setPayedOut,
    userWinnings,
    setUserWinnings,
  } = useStateContext();
  const [winning, setWinning] = useState(0);

  useEffect(() => {
    const countMatchingElements = (ticket, winningNumbers) => {
      let matchingCount = 0;
      for (const element of ticket) {
        if (winningNumbers.includes(element)) {
          matchingCount++;
        }
      }
      return matchingCount;
    };

    const count = countMatchingElements(ticket, winningNumbers);

    const founder = (inputNumber, myList) => {
      let index;

      switch (inputNumber) {
        case 2:
          index = 3;
          break;
        case 3:
          index = 2;
          break;
        case 4:
          index = 1;
          break;
        case 5:
          index = 0;
          break;
        default:
          return 0;
      }

      if (index >= 0 && index < myList.length) {
        return myList[index];
      } else {
        return 0;
      }
    };

    const winningCalculated = founder(count, payOuts);

    setWinning(winningCalculated);
  }, [winningNumbers, payOuts, ticket]);

  useEffect(() => {
    const winningPayedOut = (xList, yList) => {
      let sum = 0;

      for (let i = 0; i < xList.length; i++) {
        sum += xList[i] * yList[i];
      }

      return sum;
    };

    const TotalPayOut = winningPayedOut(payOuts, organizedArray);

    setPayedOut(TotalPayOut);
  }, [winningNumbers, payOuts, ticket]);

  return (
    <div className="small-container">
      {!isDrawn ? <h1>Good Luck</h1> : <h1>Winning: {winning}</h1>}
      <div className="ticket">
        {ticket.map((number) => (
          <TicketNumber key={number} number={number} />
        ))}
      </div>
      <p>Player: {user}</p>
      <p>Ticket ID: {id}</p>
    </div>
  );
};

export default SingleTicket;
