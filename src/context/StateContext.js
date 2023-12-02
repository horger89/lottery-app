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
  const [userWinningArray, setUserWinningArray] = useState([]);
  const [organizedArray, setOrganizedArray] = useState([]);
  const [userOrganizedArray, setUserOrganizedArray] = useState([]);
  const [payOuts, setPayOuts] = useState([]);

  //Local Storage custom hook

  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.error(err);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.error(err);
      }
    };
    return [storedValue, setValue];
  };

  //Stored states in local storage
  const [enteredNameCompleteStored, setEnteredNameCompleteStored] =
    useLocalStorage("enteredNameComplete", false);
  const [showFormStored, setShowFormStored] = useLocalStorage(
    "showForm",
    false
  );
  const [enteredNameStored, setEnteredNameStored] = useLocalStorage(
    "enteredName",
    ""
  );
  const [userBalanceStored, setUserBalanceStored] = useLocalStorage(
    "userBalance",
    10000
  );
  const [userWinningsStored, setUserWinningsStored] = useLocalStorage(
    "userWinnings",
    0
  );
  const [pricePotStored, setPricePotStored] = useLocalStorage("pricePot", 0);
  const [profitStored, setProfitStored] = useLocalStorage("profit", 0);
  const [payedOutStored, setPayedOutStored] = useLocalStorage("payedOut", 0);
  const [userNumbersStored, setUserNumbersStored] = useLocalStorage(
    "userNumbers",
    []
  );
  const [userTicketsStored, setUserTicketsStored] = useLocalStorage(
    "userTickets",
    []
  );
  const [operatorTicketsStored, setOperatorTicketsStored] = useLocalStorage(
    "operatorTickets",
    []
  );
  const [isDrawnStored, setIsDrawnStored] = useLocalStorage("isDrawn", false);
  const [winningNumbersStored, setWinningNumbersStored] = useLocalStorage(
    "winningNumbers",
    []
  );
  const [winningUserTicketsStored, setWinningUserTicketsStored] =
    useLocalStorage("winningUserTickets", []);
  const [winningOperatorTicketsStored, setWinningOperatorTicketsStored] =
    useLocalStorage("winningOperatorTickets", []);
  const [winningArrayStored, setWinningArrayStored] = useLocalStorage(
    "winningArray",
    []
  );
  const [userWinningArrayStored, setUserWinningArrayStored] = useLocalStorage(
    "userWinningArray",
    []
  );
  const [organizedArrayStored, setOrganizedArrayStored] = useLocalStorage(
    "organizedArray",
    []
  );
  const [userOrganizedArrayStored, setUserOrganizedArrayStored] =
    useLocalStorage("userOrganizedArray", []);
  const [payOutsStored, setPayOutsStored] = useLocalStorage("payOuts", []);

  //Render states from local storage
  useEffect(() => {
    setEnteredName(enteredNameStored);
    setUserBalance(userBalanceStored);
    setUserWinnings(userWinningsStored);
    setPricePot(pricePotStored);
    setProfit(profitStored);
    setPayedOut(payedOutStored);
    setUserNumbers(userNumbersStored);
    setUserTickets(userTicketsStored);
    setOperatorTickets(operatorTicketsStored);
    setIsDrawn(isDrawnStored);
    setWinningNumbers(winningNumbersStored);
    setWinningUserTickets(winningUserTicketsStored);
    setWinningOperatorTickets(winningOperatorTicketsStored);
    setWinningArray(winningArrayStored);
    setUserWinningArray(userWinningArrayStored);
    setOrganizedArray(organizedArrayStored);
    setUserOrganizedArray(userOrganizedArrayStored);
    setPayOuts(payOutsStored);
    setShowForm(showFormStored);
    setEnteredNameComplete(enteredNameCompleteStored);
  }, []);

  //HANDLERS AND OTHER FUNCTIONS

  const NewGameHAndler = () => {
    localStorage.clear();
    setEnteredName("");
    setUserBalance(10000);
    setUserWinnings(0);
    setPricePot(0);
    setProfit(0);
    setPayedOut(0);
    setUserNumbers([]);
    setUserTickets([]);
    setOperatorTickets([]);
    setIsDrawn(false);
    setWinningNumbers([]);
    setWinningUserTickets([]);
    setWinningOperatorTickets([]);
    setWinningArray([]);
    setUserWinningArray([]);
    setOrganizedArray([]);
    setUserOrganizedArray([]);
    setPayOuts([]);
    setShowForm(false);
    setEnteredNameComplete(false);
  };

  useEffect(() => {
    const calculateProfit = (x, y) => {
      const z = x - y;
      return z;
    };
    const TotalProfit = calculateProfit(pricePot, payedOut);
    setProfit(TotalProfit);
    setProfitStored(TotalProfit);
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
    setUserWinningsStored(final);
  }, [profit]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameStored(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameIsValid) {
      setEnteredNameComplete(true);
      setEnteredNameCompleteStored(true);
    }
  };

  const addNumber = (number) => {
    const checkItemInNumbers = userNumbers.includes(number);

    if (!checkItemInNumbers && userNumbers.length < 5) {
      setUserNumbers([...userNumbers, number]);
      setUserNumbersStored([...userNumbers, number]);
    } else {
      const arrayWithoutNumber = userNumbers.filter(function (unique) {
        return unique !== number;
      });
      setUserNumbers(arrayWithoutNumber);
      setUserNumbersStored(arrayWithoutNumber);
    }
  };

  const addTicket = () => {
    if (userNumbers.length === 5 && userBalance >= 1000) {
      setUserTickets([
        ...userTickets,
        { id: userTickets.length + 1, userTicket: userNumbers },
      ]);
      setUserTicketsStored([
        ...userTickets,
        { id: userTickets.length + 1, userTicket: userNumbers },
      ]);
      setUserBalance(userBalance - 1000);
      setUserBalanceStored(userBalance - 1000);
      setUserNumbers([]);
      setUserNumbersStored([]);
      setPricePot(pricePot + 1000);
      setPricePotStored(pricePot + 1000);
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
      setOperatorTicketsStored(updatedOperatorTickets);
      setPricePot(pricePot + amountToAdd * 1000);
      setPricePotStored(pricePot + amountToAdd * 1000);

      setShowForm(false);
      setShowFormStored(false);
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
    setWinningNumbersStored(numbers);
    setIsDrawn(true);
    setIsDrawnStored(true);

    const userResultArrays = [];
    const operatorResultArrays = [];
    const matchingArray = [];

    const userMatcingArray = [];

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

        userMatcingArray.push(matchingCount);
      }
    }

    setWinningUserTickets(userResultArrays);
    setWinningUserTicketsStored(userResultArrays);

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
    setWinningOperatorTicketsStored(operatorResultArrays);
    setWinningArray(matchingArray);
    setWinningArrayStored(matchingArray);

    setUserWinningArray(userMatcingArray);
    setUserWinningArrayStored(userMatcingArray);
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

    const userOrganized = organizeWinningTickets(userWinningArray);

    setOrganizedArray(organized);
    setOrganizedArrayStored(organized);

    setUserOrganizedArray(userOrganized);
    setUserOrganizedArrayStored(userOrganized);

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
    setPayOutsStored(Pay);
  }, [isDrawn]);

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
        setPayedOutStored,
        setUserWinnings,
        setUserBalance,
        NewGameHAndler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
