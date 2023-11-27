import React, { useState } from "react";
import "./Numbers.css";
import { useStateContext } from "../context/StateContext";

const Numbers = ({ number }) => {
  const { addNumber, userNumbers } = useStateContext();
  const checkItemInNumbers = userNumbers.includes(number);
  const buttonClasses = checkItemInNumbers ? "active-number-btn" : "number-btn";
  return (
    <button
      onClick={() => addNumber(number)}
      className={buttonClasses}
      type="submit"
    >
      {number}
    </button>
  );
};

export default Numbers;
