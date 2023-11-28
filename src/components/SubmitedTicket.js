import React from "react";
import "./SubmitedTicket.css";
import TicketNumber from "./TicketNumber";
import { useStateContext } from "../context/StateContext";

const SingleTicket = ({ ticket, user }) => {
  const { winningNumbers } = useStateContext();

  const countMatchingElements = (array1, array2) => {
    let matchingCount = 0;
    for (const element of array2) {
      if (array1.includes(element)) {
        matchingCount++;
      }
    }

    return matchingCount;
  };

  const matchingCount = countMatchingElements(ticket, winningNumbers);

  return (
    <div className="small-container">
      <h1>Winning: {matchingCount}</h1>
      <div className="ticket">
        {ticket.map((number) => (
          <TicketNumber key={number} number={number} />
        ))}
      </div>
      <p>Player: {user}</p>
    </div>
  );
};

export default SingleTicket;
