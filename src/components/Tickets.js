import React from "react";
import "./Tickets.css";
import SingleTicket from "./SubmitedTicket";
import { useStateContext } from "../context/StateContext";

const Tickets = () => {
  const { userTickets, enteredName, operatorTickets, isOperator } =
    useStateContext();
  const isUserTicket = userTickets.length > 0;
  const isOperatorTickets =
    userTickets.length > 0 || operatorTickets.length > 0;

  const User = () => {
    return isUserTicket ? <h1>Tickets</h1> : <h1>No Tickets Yet</h1>;
  };
  const Operator = () => {
    return isOperatorTickets ? <h1>Tickets</h1> : <h1>No Tickets Yet</h1>;
  };

  return (
    <div>
      <div className="desc-cont">{isOperator ? <Operator /> : <User />}</div>
      <div className="articles">
        {userTickets.map((ticket) => (
          <SingleTicket user={enteredName} ticket={ticket} />
        ))}
        {isOperator &&
          operatorTickets.map((operatorticket) => (
            <SingleTicket user="Operator Generated" ticket={operatorticket} />
          ))}
      </div>
    </div>
  );
};

export default Tickets;
