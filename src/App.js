import React, { useState } from "react";
import './App.css';

function App() {

  const [term, setTerm] = useState("");
  const [secret, setSecret] = useState(generateRandomNumber());
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  const checkGuess = () => {
    const guess = parseInt(term, 10);
    if(isNaN(guess) || guess < 1 || guess > 20) {
      setMessage("❌ Please enter a number between 1 and 20.");
      return;
    }

    setAttempts(attempts + 1);

    if(guess === secret) {
      setMessage(`🎉 Correct! The number was ${secret}. You guessed it in ${attempts + 1} tries.`);
    } else if (guess < secret) {
      setMessage("📉 Too low! Try a higher number.");
    } else {
      setMessage("📈 Too high! Try a lower number.");
    }
  }

  const resetGame = () => {
    setSecret(generateRandomNumber());
    setTerm("");
    setMessage("");
    setAttempts(0);
  }


  return (
    <div className="container">

       <h1>🎯 Guess the Number</h1>
       <p>Guess a number between <strong>1 and 20</strong>.</p>

       <input 
          type="number"
          value={term}
          onChange={handleChange}
          placeholder="Enter your gues"
       />

        <button onClick={checkGuess}>Check</button>
        <button onClick={resetGame} className="reset-btn">Reset</button>

        {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
