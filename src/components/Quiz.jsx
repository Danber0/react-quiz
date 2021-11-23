import React from 'react';

function Quiz({ questions, currentQuestion, handleAnswerOptionClick, seconds }) {
  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>
            Номер вопроса {currentQuestion + 1}/{questions.length}
          </span>
          <span className="time">Время: {seconds}</span>
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((elem, index) => (
          <button
            key={index}
            className="button-answer"
            onClick={() => handleAnswerOptionClick(elem.isCorrect)}>
            {elem.answerText}
          </button>
        ))}
      </div>
    </>
  );
}

export default Quiz;
