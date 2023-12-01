import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [showForm, setShowForm] = useState(false);
  //Winning Numbers
  const [isDrawn, setIsDrawn] = useState(false);
  const [winningNumbers, setWinningNumbers] = useState([]);
  //Winning Tickets
  const [winningUserTickets, setWinningUserTickets] = useState([]);
  const [winningOperatorTickets, setWinningOperatorTickets] = useState([]);
  const [winningArray, setWinningArray] = useState([]);
  //new
  const [userWinningArray, setUserWinningArray] = useState([]);
  //
  const [organizedArray, setOrganizedArray] = useState([]);
  //new
  const [userOrganizedArray, setUserOrganizedArray] = useState([]);
  console.log(userOrganizedArray);
  //
  const [payOuts, setPayOuts] = useState([]);
  console.log(payOuts);

  //HANDLERS AND OTHER FUNCTIONS

  useEffect(() => {
    const calculateProfit = (x, y) => {
      const z = x - y;
      return z;
    };
    const TotalProfit = calculateProfit(pricePot, payedOut);
    setProfit(TotalProfit);
  }, [payedOut]);

  useEffect(() => {
    const calculateRevenue = (array1, array2) => {
      let total = 0;
      for (let i = 0; i < array1.length; i++) {
        let multi = array1[i] * array2[i];
        total += multi;
      }
      return total;
    };
    const final = calculateRevenue(userOrganizedArray, payOuts);
    setUserWinnings(final);
    const finalBalance = userBalance + final;
    setUserBalance(finalBalance);
  }, [payedOut]);

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
      setUserTickets([
        ...userTickets,
        { id: userTickets.length + 1, userTicket: userNumbers },
      ]);
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
      let currentId = 100;

      for (let i = 0; i < amountToAdd; i++) {
        const numbers = [];
        while (numbers.length < 5) {
          const number = Math.floor(Math.random() * 39) + 1;
          if (!numbers.includes(number)) {
            numbers.push(number);
          }
        }

        randomArrays.push({
          id: operatorTickets.length + currentId++,
          operatorTicket: numbers,
        });
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

    const userResultArrays = [];
    const operatorResultArrays = [];
    const matchingArray = [];
    //new
    const userMatcingArray = [];
    //

    for (const userTicket of userTickets) {
      const { userTicket: ticket } = userTicket;
      let matchingCount = 0;

      for (const element of ticket) {
        if (numbers.includes(element)) {
          matchingCount++;
        }
      }

      if (matchingCount >= 2) {
        userResultArrays.push(userTicket);
        matchingArray.push(matchingCount);
        //new
        userMatcingArray.push(matchingCount);
        //
      }
    }

    setWinningUserTickets(userResultArrays);

    for (const operatorTicket of operatorTickets) {
      const { operatorTicket: ticket } = operatorTicket;
      let matchingCount = 0;

      for (const element of ticket) {
        if (numbers.includes(element)) {
          matchingCount++;
        }
      }

      if (matchingCount >= 2) {
        operatorResultArrays.push(operatorTicket);
        matchingArray.push(matchingCount);
      }
    }

    setWinningOperatorTickets(operatorResultArrays);
    setWinningArray(matchingArray);
    //new
    setUserWinningArray(userMatcingArray);
    //
  };

  useEffect(() => {
    const organizeWinningTickets = (myList) => {
      const newList = [0, 0, 0, 0];
      let i = 0;

      while (i < myList.length) {
        if (myList[i] === 5) {
          newList[0] += 1;
        } else if (myList[i] === 4) {
          newList[1] += 1;
        } else if (myList[i] === 3) {
          newList[2] += 1;
        } else if (myList[i] === 2) {
          newList[3] += 1;
        }

        i += 1;
      }

      return newList;
    };

    const organized = organizeWinningTickets(winningArray);
    //new
    const userOrganized = organizeWinningTickets(userWinningArray);
    //
    setOrganizedArray(organized);
    //new
    setUserOrganizedArray(userOrganized);
    //

    const calculatePayOuts = (winningTickets, totalRevenue) => {
      const priceToPay = [];
      let remainingRevenue = totalRevenue;
      let percentage = 0.99;

      for (const ticket of winningTickets) {
        if (ticket === 0) {
          priceToPay.push(0);
          percentage /= 2;
        } else {
          const payment = Math.round((remainingRevenue * percentage) / ticket);
          priceToPay.push(payment);
          remainingRevenue -= payment;
          percentage /= 2;
        }
      }

      return priceToPay;
    };
    const Pay = calculatePayOuts(organized, pricePot);
    setPayOuts(Pay);
  }, [winningArray]);

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
        winningNumbers,
        setWinningUserTickets,
        setWinningOperatorTickets,
        winningOperatorTickets,
        winningUserTickets,
        payOuts,
        winningArray,
        organizedArray,
        setPayedOut,
        setUserWinnings,
        setUserBalance,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
