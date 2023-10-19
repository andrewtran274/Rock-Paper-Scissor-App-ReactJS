import React, { useEffect, useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("...");
  const [computerChoice, setComputerChoice] = useState("...");
  const [result, setResult] = useState("Let's go...!");
  const [activeChoice, setActiveChoice] = useState(null);

  const handleChoice = (choice) => {
    setActiveChoice(null);
    setActiveChoice(choice);

    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice("...");
    setComputerChoice("...");
    setResult("Wait...");

    setTimeout(() => {
      setPlayerChoice(choice);
      setComputerChoice(computerRandomChoice);

      const gameResult = determineWinner(choice, computerRandomChoice);
      setResult(gameResult);
      setActiveChoice(null);
    }, 2500);
  };

  return (
    <div className={`app ${activeChoice ? "active" : ""}`}>
      <h1 className="heading">Rock Paper Scissors</h1>

      <div className="result">
        {playerChoice && <p>Your choice: {playerChoice}</p>}
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>Result: {result}</p>}
      </div>

      <div className="choices">
        {choices.map((choice) => (
          <button
            className={`btn ${activeChoice === choice ? "active" : ""}`}
            key={choice}
            onClick={() => handleChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
