import React from "react";
import "./AllTickets.css";
import { useStateContext } from "../context/StateContext";
import SingleTicket from "./SubmitedTicket";

const AllTickets = () => {
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
          <SingleTicket key={ticket.id} user={enteredName} ticket={ticket.userTicket} id={ticket.id}/>
        ))}
        {isOperator &&
          operatorTickets.map((operatorticket) => (
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

export default AllTickets;
