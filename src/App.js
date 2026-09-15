import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What day was our first kiss?',
    options: ['A. 3 July 2026', 'B. 9 July 2026', 'C. 1 July 2026', 'D. 11 July 2026'],
    correct: 'B'
  },
  {
    question: 'What was our favorite place to go together?',
    options: ['A. A quiet park', 'B. A rooftop restaurant', 'C. Vega mall', 'D. library'],
    correct: 'B'
  },
  {
    question: 'Will you marry me in Future ?',
    options: ['A.Yes', 'B. Absolutely Yes', 'C. Koi Shak', 'D.Aj hi krlo'],
    correct: 'B'

  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultOpen, setResultOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleGoAhead = () => {
    setIsModalOpen(false);
    setShowQuestions(true);
  };

  const handleAnswerClick = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: option.charAt(0) }));
  };

  const answeredAll = questions.every((_, index) => selectedAnswers[index]);

  const handleProceed = () => {
    if (!answeredAll) return;

    const total = questions.reduce((sum, question, index) => {
      return sum + (selectedAnswers[index] === question.correct ? 1 : 0);
    }, 0);

    setScore(total);
    setResultOpen(true);
  };

  return (
    <main className="page-shell">
      {!showQuestions ? (
        <section className="invitation-card">
          <div className="heart-row" aria-label="Love decoration">
            <span>♥</span>
            <span>♥</span>
            <span>♥</span>
          </div>

          <p className="eyebrow">A little note</p>
          <h1>Will you go for a date with me?</h1>
          <p className="subtitle">
            I’d love to spend some time with you, laugh together, and make a beautiful memory.
          </p>

          <form className="date-form" onSubmit={handleSubmit}>
            <label className="choice-row" htmlFor="date-yes">
              <input id="date-yes" type="checkbox" />
              <span>Yes, I’d love to</span>
            </label>

            <button type="submit">Submit</button>
          </form>
        </section>
      ) : (
        <section className="questions-panel">
          <p className="questions-tag">A few quick things</p>
          <h3>Answer these questions</h3>

          <div className="question-list">
            {questions.map((item, index) => (
              <div className="question-card" key={item.question}>
                <p className="question-number">Question {index + 1}</p>
                <h4>{item.question}</h4>

                <div className="options-grid">
                  {item.options.map((option) => {
                    const selectedLetter = selectedAnswers[index];
                    const optionLetter = option.charAt(0);
                    const isSelected = selectedLetter === optionLetter;
                    const isCorrect = selectedLetter && selectedLetter === item.correct && isSelected;
                    const isWrong = selectedLetter && selectedLetter !== item.correct && isSelected;

                    return (
                      <button
                        type="button"
                        key={option}
                        className={`answer-option ${isSelected ? 'selected-answer' : ''} ${isCorrect ? 'correct-answer' : ''} ${isWrong ? 'wrong-answer' : ''}`}
                        onClick={() => handleAnswerClick(index, option)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="proceed-button" onClick={handleProceed} disabled={!answeredAll}>
            Proceed
          </button>
        </section>
      )}

      {isModalOpen && (
        <div className="modal-backdrop" role="presentation">
          <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              type="button"
              className="close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <p className="modal-tag">Before accepting</p>
            <h2 id="modal-title">Before accepting, here are a few questions for you.</h2>

            <button type="button" className="go-ahead-button" onClick={handleGoAhead}>
              Go Ahead
            </button>
          </div>
        </div>
      )}

      {resultOpen && (
        <div className="modal-backdrop" role="presentation">
          <div className="modal-card result-card" role="dialog" aria-modal="true" aria-labelledby="result-title">
            <p className="modal-tag">Your result</p>
            <h2 id="result-title">Out of {questions.length}, you have scored {score}</h2>
            <p className="congrats-text">Congratulations!</p>
            <button type="button" className="go-ahead-button" onClick={() => setResultOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
