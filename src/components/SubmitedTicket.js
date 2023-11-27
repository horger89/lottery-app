import React from "react";
import "./SubmitedTicket.css";

const SingleTicket = ({ ticket, user }) => {
  return (
    <div className="small-container">
      <h1>Winning: 100</h1>
      <div className="ticket">
        <div className="ticket-number">{ticket[0]}</div>
        <div className="ticket-number">{ticket[1]}</div>
        <div className="ticket-number">{ticket[2]}</div>
        <div className="ticket-number">{ticket[3]}</div>
        <div className="ticket-number">{ticket[4]}</div>
      </div>
      <p>Player: {user}</p>
    </div>
  );
};

export default SingleTicket;
