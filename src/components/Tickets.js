import React from "react";
import AllTickets from "./AllTickets";
import { useStateContext } from "../context/StateContext";
import WinningTickets from "./WinningTickets";

const Tickets = () => {
  const { isDrawn } = useStateContext();

  return <div>{!isDrawn ? <AllTickets /> : <WinningTickets />}</div>;
};

export default Tickets;
