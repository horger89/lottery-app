import React from "react";
import "./WinningTickets.css";
import { useStateContext } from "../context/StateContext";
import SingleTicket from "./SubmitedTicket";

const WinningTickets = () => {
  const {
    winningOperatorTickets,
    winningUserTickets,
    enteredName,
    isOperator,
  } = useStateContext();
  const isUserWinningTicket = winningUserTickets.length > 0;
  const isOperatorWinningTickets =
    winningUserTickets.length > 0 || winningOperatorTickets.length > 0;

  const User = () => {
    return isUserWinningTicket ? (
      <h1>Winning Tickets</h1>
    ) : (
      <h1>No Winning Tickets</h1>
    );
  };
  const Operator = () => {
    return isOperatorWinningTickets ? (
      <h1>Winning Tickets</h1>
    ) : (
      <h1>No Winning Tickets</h1>
    );
  };

  return (
    <div>
      <div className="desc-cont">{isOperator ? <Operator /> : <User />}</div>
      <div className="articles">
        {winningUserTickets.map((ticket) => (
          <SingleTicket
            key={ticket.id}
            user={enteredName}
            ticket={ticket.userTicket}
            id={ticket.id}
          />
        ))}
        {isOperator &&
          winningOperatorTickets.map((operatorticket) => (
            <SingleTicket
              key={operatorticket.id}
              user="Operator Generated"
              ticket={operatorticket.operatorTicket}
              id={operatorticket.id}
            />
          ))}
      </div>
    </div>
  );
};

export default WinningTickets;
