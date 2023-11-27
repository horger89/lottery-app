import React, { useState, useEffect } from "react";

const Game = () => {
  const [drawNumbers, setDrawNumbers] = useState([]);
  const [winningTickets, setWinningTickets] = useState([]);

  useEffect(() => {
    // Generál egy új sorszámot.
    const numbers = Array(5).fill(null);
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = Math.floor(Math.random() * 39) + 1;
    }
    setDrawNumbers(numbers);
  }, []);

  useEffect(() => {
    // Kiszámítja a nyertes szelvényeket.
    const winningTickets = tickets.filter((ticket) => {
      const matchCount = ticket.numbers.reduce((count, number) => {
        return count + (number === drawNumbers[count] ? 1 : 0);
      }, 0);
      return matchCount >= 2;
    });
    setWinningTickets(winningTickets);
  }, [drawNumbers, tickets]);

  return (
    <div>
      <h2>Sorszámok:</h2>
      <ul>
        {drawNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <h2>Nyertes szelvények:</h2>
      <ul>
        {winningTickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.numbers.join(", ")} - {ticket.amount} akcse
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
