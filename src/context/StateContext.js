import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  // Define Who's Using the app
  const [isOperator, setIsOperator] = useState(false);
  // User name form
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameComplete, setEnteredNameComplete] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  // User Balances
  const [userBalance, setUserBalance] = useState(10000);
  const [userWinnings, setUserWinnings] = useState(0);
  // Operator Balances
  const [pricePot, setPricePot] = useState(0);
  const [profit, setProfit] = useState(0);
  const [payedOut, setPayedOut] = useState(0);
  // User Numbers and tickets
  const [userNumbers, setUserNumbers] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  //Generate Operator Ticket
  const [operatorTickets, setOperatorTickets] = useState([]);
  //Quantity form
  const [amountToAdd, setAmountToAdd] = useState(0);
  console.log(amountToAdd);
  const [showForm, setShowForm] = useState(false);
  //Winning Numbers
  const [isDrawn, setIsDrawn] = useState(false);
  console.log(isDrawn);
  const [winningNumbers, setWinningNumbers] = useState([]);

  //HANDLERS

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameIsValid) {
      setEnteredNameComplete(true);
    }
  };

  const addNumber = (number) => {
    const checkItemInNumbers = userNumbers.includes(number);

    if (!checkItemInNumbers && userNumbers.length < 5) {
      setUserNumbers([...userNumbers, number]);
    } else {
      const arrayWithoutNumber = userNumbers.filter(function (unique) {
        return unique !== number;
      });
      setUserNumbers(arrayWithoutNumber);
    }
  };

  const addTicket = () => {
    if (userNumbers.length === 5 && userBalance >= 1000) {
      setUserTickets([...userTickets, userNumbers]);
      setUserBalance(userBalance - 1000);
      setUserNumbers([]);
      setPricePot(pricePot + 1000);
    }
  };

  const showFromHandler = () => {
    setShowForm(true);
  };

  const amountIsValid = (amountToAdd) => {
    return typeof amountToAdd === "number";
  };

  const amountInputChangeHandler = (event) => {
    setAmountToAdd(event.target.value);
  };

  const amountSubmissionHandler = (event) => {
    event.preventDefault();
    if (amountIsValid) {
      const updatedOperatorTickets = [...operatorTickets];
      const randomArrays = [];
      for (let i = 0; i < amountToAdd; i++) {
        const numbers = [];
        while (numbers.length < 5) {
          const number = Math.floor(Math.random() * 39) + 1;
          if (!numbers.includes(number)) {
            numbers.push(number);
          }
        }
        randomArrays.push(numbers);
      }

      updatedOperatorTickets.push(...randomArrays);
      setOperatorTickets(updatedOperatorTickets);
      setPricePot(pricePot + amountToAdd * 1000);
      setShowForm(false);
      setAmountToAdd(0);
    }
  };

  const WinningTicketGenerator = () => {
    const numbers = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 39) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setWinningNumbers(numbers);
    setIsDrawn(true);
  };

  return (
    <Context.Provider
      value={{
        isOperator,
        setIsOperator,
        nameInputChangeHandler,
        formSubmissionHandler,
        enteredNameComplete,
        enteredName,
        userBalance,
        userWinnings,
        pricePot,
        profit,
        payedOut,
        addNumber,
        userNumbers,
        addTicket,
        userTickets,
        operatorTickets,
        amountInputChangeHandler,
        amountSubmissionHandler,
        showForm,
        showFromHandler,
        isDrawn,
        WinningTicketGenerator,
        winningNumbers
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
