import React, { useState } from 'react';

import './App.scss';
import { questions } from './heplers/questions';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
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
          {showScore ? (
            <div className="score-section">
              Поздравляю! Ты правильно ответили на {(score / questions.length) * 100} % вопросов
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Номер вопроса {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    className="button-answer"
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
