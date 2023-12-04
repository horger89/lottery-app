import React, { useState } from "react";
import "./WinningTickets.css";
import { useStateContext } from "../context/StateContext";
import SingleTicket from "./SubmitedTicket";

const WinningTickets = () => {
  const {
    winningOperatorTickets,
    winningUserTickets,
    enteredName,
    isOperator,
    organizedArray,
    userOrganizedArray,
  } = useStateContext();
  const isUserWinningTicket = winningUserTickets.length > 0;
  const isOperatorWinningTickets =
    winningUserTickets.length > 0 || winningOperatorTickets.length > 0;

  const User = () => {
    return isUserWinningTicket ? (
      <h1>Winning Tickets ({winningUserTickets.length})</h1>
    ) : (
      <h1>No Winning Tickets</h1>
    );
  };
  const Operator = () => {
    return isOperatorWinningTickets ? (
      <h1>Winning Tickets ({winningOperatorTickets.length})</h1>
    ) : (
      <h1>No Winning Tickets</h1>
    );
  };

  const AllWinningUserTicket = () => {
    return filteredUserArray.map((ticket) => (
      <SingleTicket
        key={ticket.id}
        user={enteredName}
        ticket={ticket.userTicket}
        id={ticket.id}
      />
    ));
  };

  const AllWinningOperatorTickets = () => {
    return filteredOperatorArray.map((operatorticket) => (
      <SingleTicket
        key={operatorticket.id}
        user="Operator Generated"
        ticket={operatorticket.operatorTicket}
        id={operatorticket.id}
      />
    ));
  };

  //new
  const [comparisonOperator, setComparisonOperator] = useState(">=");
  const [comparisonValue, setComparisonValue] = useState(2);

  const filteredUserArray = winningUserTickets.filter((item) => {
    switch (comparisonOperator) {
      case "===":
        return item.matching === comparisonValue;
      case ">=":
        return item.matching >= comparisonValue;
      // Add more cases for other comparison operators if needed
      default:
        return false;
    }
  });

  const filteredOperatorArray = winningOperatorTickets.filter((item) => {
    switch (comparisonOperator) {
      case "===":
        return item.matching === comparisonValue;
      case ">=":
        return item.matching >= comparisonValue;
      // Add more cases for other comparison operators if needed
      default:
        return false;
    }
  });

  const OperatorButtons = () => {
    return (
      <div className="filter">
        {organizedArray[3] > 0 && (
          <button onClick={AllMatchesHandler} className="filter-btn">
            All tickets
          </button>
        )}
        {organizedArray[3] > 0 && (
          <button onClick={TwoMatchessHandler} className="filter-btn">
            2 Matches
          </button>
        )}
        {organizedArray[2] > 0 && (
          <button onClick={ThreeMAtchesHandler} className="filter-btn">
            3 Matches
          </button>
        )}
        {organizedArray[1] > 0 && (
          <button onClick={FourMatchesHandler} className="filter-btn">
            4 Matches
          </button>
        )}
        {organizedArray[0] > 0 && (
          <button onClick={FiveMatchesHandler} className="filter-btn">
            5 Matches
          </button>
        )}
      </div>
    );
  };
  const UserButtons = () => {
    return (
      <div className="filter">
        {userOrganizedArray[3] > 0 && (
          <button onClick={AllMatchesHandler} className="filter-btn">
            All tickets
          </button>
        )}
        {userOrganizedArray[3] > 0 && (
          <button onClick={TwoMatchessHandler} className="filter-btn">
            2 Matches
          </button>
        )}
        {userOrganizedArray[2] > 0 && (
          <button onClick={ThreeMAtchesHandler} className="filter-btn">
            3 Matches
          </button>
        )}
        {userOrganizedArray[1] > 0 && (
          <button onClick={FourMatchesHandler} className="filter-btn">
            4 Matches
          </button>
        )}
        {userOrganizedArray[0] > 0 && (
          <button onClick={FiveMatchesHandler} className="filter-btn">
            5 Matches
          </button>
        )}
      </div>
    );
  };
  const AllMatchesHandler = () => {
    setComparisonOperator(">=");
    setComparisonValue(2);
  };
  const TwoMatchessHandler = () => {
    setComparisonOperator("===");
    setComparisonValue(2);
  };
  const ThreeMAtchesHandler = () => {
    setComparisonOperator("===");
    setComparisonValue(3);
  };
  const FourMatchesHandler = () => {
    setComparisonOperator("===");
    setComparisonValue(4);
  };
  const FiveMatchesHandler = () => {
    setComparisonOperator("===");
    setComparisonValue(5);
  };
  //

  return (
    <div>
      <div className="desc-cont">{isOperator ? <Operator /> : <User />}</div>
      {isOperator ? <OperatorButtons /> : <UserButtons />}
      <div className="articles">
        {<AllWinningUserTicket />}
        {isOperator && <AllWinningOperatorTickets />}
      </div>
    </div>
  );
};

export default WinningTickets;
