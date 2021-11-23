import React from 'react';

function Result({ questions, score }) {
  const scores = (score / questions.length) * 100;

  return (
    <div className="score-section">
      {scores === 100 ? (
        <div className="success">
          <p className="success__description">
            Поздравляю! Ты успешно прошел тест и правильно ответили на{' '}
            {(score / questions.length) * 100}% вопросов
          </p>
          <a className="success__link link" href="https://google.com">
            Вот ссылка на оплату курса
          </a>
        </div>
      ) : (
        <div className="wrong">
          <p className="wrong__description">
            К сожалению ты не прошел тест, тебе нужно лучше выучить JavaScript вот хороший сайт:{' '}
            <a className="wrong__link link" href="https://learn.javascript.ru/">
              learn.javascript.ru
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Result;
