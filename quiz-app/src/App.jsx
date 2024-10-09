import { useState } from "react";
import "./App.css";

function App() {
  let questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Uranus"],
      correctAnswer: 2,
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: 0,
    },
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Chennai", "Goa"],
      correctAnswer: 0,
    },
    {
      question: "Who is the captain of Indian Cricket Team in Test Format?",
      options: ["Virat Kolhi", "Rohit Sharma", "Jusprit Bumrah", "KL Rahul"],
      correctAnswer: 1,
    },
  ];

  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [showScore, setShowScore] = useState(false);

  function checkAnswer() {
    if (selectedAnswer !== null) {
      let correct = questions[currentQuestion].correctAnswer === selectedAnswer;
      if (correct) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }
  }

  return (
    <>
      <div class="quiz-container">
        <div class="quiz-body">
          {showScore ? (
            <div class="score-container">
              <p>
                Your score is {score} out of {questions.length}
              </p>
            </div>
          ) : (
            <div class="question-container">
              <p>{questions[currentQuestion].question}</p>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`option${index + 1}`}
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={(e) =>
                        setSelectedAnswer(parseInt(e.target.value))
                      }
                    />
                    <label for={`option${index + 1}`}>{option}</label>
                  </li>
                ))}
              </ul>
              <button id="submit-btn" onClick={checkAnswer}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
