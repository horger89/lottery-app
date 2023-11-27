import React from "react";
import "./Quantity.css";
import { useStateContext } from "../context/StateContext";

const Quantity = () => {
  const { amountInputChangeHandler, amountSubmissionHandler } =
    useStateContext();
  return (
    <form onSubmit={amountSubmissionHandler}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h1>How many tickets would you like to create?</h1>
          <input onChange={amountInputChangeHandler} type="number" />
          <div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Quantity;
