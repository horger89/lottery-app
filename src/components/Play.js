import "./Play.css";
import { useStateContext } from "../context/StateContext";
import React from "react";
import Numbers from "./Numbers";
import Quantity from "./Quantity";
import WinningNumbers from "./WinningNumbers";

const Play = () => {
  const {
    isOperator,
    addTicket,
    showForm,
    showFromHandler,
    isDrawn,
    WinningTicketGenerator,
  } = useStateContext();
  const containerClasses = isOperator ? "operator-container" : "container";

  let myArr = [];
  for (let i = 1; i <= 39; i++) {
    myArr.push(i);
  }

  return (
    <div>
      {!isDrawn ? (
        <div className={containerClasses}>
          {showForm && <Quantity />}
          {!isOperator && <h1>Select Your Numbers</h1>}
          {!isOperator && (
            <div className="select-numbers">
              {myArr.map((item) => (
                <Numbers key={item} number={item} />
              ))}
            </div>
          )}
          {!isOperator && (
            <div className="center-button">
              <button type="submit" className="btn-play" onClick={addTicket}>
                Submit
              </button>
            </div>
          )}
          {isOperator && <h1>Operator Tasks</h1>}
          <div className="operator-btns">
            {isOperator && (
              <button onClick={WinningTicketGenerator} className="btn-play-operator">
                Draw Numbers
              </button>
            )}
            {isOperator && (
              <button onClick={showFromHandler} className="btn-play-operator">
                Create Tickets
              </button>
            )}
          </div>
        </div>
      ) : (
        <WinningNumbers />
      )}
    </div>
  );
};

export default Play;
