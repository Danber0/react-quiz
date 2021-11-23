import React, { useState } from 'react';

import './App.scss';
import Result from './components/Result';
import Quiz from './components/Quiz';
import { questions } from './heplers/questions';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [seconds, setSeconds] = React.useState(20);
  const [score, setScore] = useState(0);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  }, [seconds]);

  const handleAnswerOptionClick = (isCorrect) => {
    const scoreCounter = score + 1;
    if (isCorrect) {
      setScore(scoreCounter);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <div className="quiz">
        <div className="quiz__menu">
          {showScore || seconds === 0 ? (
            <Result questions={questions} score={score} />
          ) : (
            <Quiz
              questions={questions}
              currentQuestion={currentQuestion}
              seconds={seconds}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
