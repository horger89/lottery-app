import React from "react";
import "./Tickets.css";
import { useStateContext } from "../context/StateContext";
import AllTickets from "./AllTickets";

const Tickets = () => {
  return (
    <div>
      <AllTickets />
    </div>
  );
};

export default Tickets;
