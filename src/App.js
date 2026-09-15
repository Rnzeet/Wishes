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
   },
  {
    question: 'When we went on our first date?',
    options: ['A. 3 July 2026', 'B. 9 July 2026', 'C. 1 July 2026', 'D. 11 July 2026'],
    correct: 'B'
   },
  {
    question: 'eeeeeeeeeee kro?',
    options: ['A.Ha', 'B. kar rha hu', 'C. abhi krunga', 'D.eeeeeeeeeeee'],
    correct: 'B'
  }
];

const floatingHearts = [
  { left: '4%', top: '8%', size: 18, delay: '0s', duration: '12s' },
  { left: '10%', top: '20%', size: 20, delay: '1s', duration: '15s' },
  { left: '18%', top: '14%', size: 16, delay: '2.4s', duration: '13s' },
  { left: '24%', top: '32%', size: 22, delay: '0.8s', duration: '17s' },
  { left: '32%', top: '18%', size: 18, delay: '3s', duration: '16s' },
  { left: '38%', top: '42%', size: 24, delay: '1.6s', duration: '18s' },
  { left: '50%', top: '12%', size: 20, delay: '2.1s', duration: '14s' },
  { left: '58%', top: '26%', size: 26, delay: '0.4s', duration: '19s' },
  { left: '68%', top: '16%', size: 18, delay: '2.8s', duration: '15s' },
  { left: '76%', top: '36%', size: 22, delay: '1.2s', duration: '17s' },
  { left: '84%', top: '18%', size: 16, delay: '3.4s', duration: '13s' },
  { left: '92%', top: '28%', size: 20, delay: '0.7s', duration: '15s' },
  { left: '8%', top: '58%', size: 20, delay: '1.8s', duration: '16s' },
  { left: '18%', top: '72%', size: 22, delay: '0.6s', duration: '18s' },
  { left: '28%', top: '64%', size: 18, delay: '2.7s', duration: '15s' },
  { left: '36%', top: '82%', size: 24, delay: '1.5s', duration: '17s' },
  { left: '48%', top: '70%', size: 16, delay: '0.9s', duration: '14s' },
  { left: '58%', top: '80%', size: 22, delay: '3s', duration: '18s' },
  { left: '70%', top: '68%', size: 18, delay: '1.3s', duration: '16s' },
  { left: '80%', top: '78%', size: 24, delay: '2.2s', duration: '19s' },
  { left: '90%', top: '60%', size: 18, delay: '3.6s', duration: '15s' }
];

const fireworks = [
  { left: '12%', top: '18%', size: 12, color: '#ff89b7', delay: '0s' },
  { left: '25%', top: '30%', size: 10, color: '#ffd166', delay: '0.3s' },
  { left: '38%', top: '20%', size: 16, color: '#ff7b9c', delay: '0.5s' },
  { left: '52%', top: '28%', size: 12, color: '#b794ff', delay: '0.8s' },
  { left: '66%', top: '18%', size: 14, color: '#7ee7c9', delay: '0.2s' },
  { left: '82%', top: '35%', size: 10, color: '#ffb5d8', delay: '0.6s' },
  { left: '18%', top: '58%', size: 11, color: '#74d4ff', delay: '0.7s' },
  { left: '34%', top: '70%', size: 15, color: '#ff9ec8', delay: '0.4s' },
  { left: '48%', top: '66%', size: 13, color: '#ffd166', delay: '0.9s' },
  { left: '63%', top: '58%', size: 12, color: '#d9a6ff', delay: '0.1s' },
  { left: '78%', top: '70%', size: 10, color: '#7ee7c9', delay: '0.5s' },
  { left: '88%', top: '52%', size: 16, color: '#ff89b7', delay: '0.8s' }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultOpen, setResultOpen] = useState(false);
  const [celebrationOpen, setCelebrationOpen] = useState(false);

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

  const handleCloseResult = () => {
    setResultOpen(false);
    setCelebrationOpen(true);
  };

  return (
    <main className="page-shell">
      <div className="floating-hearts" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            className="floating-heart"
            style={{
              left: heart.left,
              top: heart.top,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              opacity: 0.7
            }}
          >
            ♥
          </span>
        ))}
      </div>

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

      {resultOpen && !celebrationOpen && (
        <div className="modal-backdrop" role="presentation">
          <div className="modal-card result-card" role="dialog" aria-modal="true" aria-labelledby="result-title">
            <div className="result-badge" aria-hidden="true">
              ♥
            </div>

            <h2 id="result-title">Out of {questions.length}, you have scored {score}</h2>
            <p className="congrats-text">Congratulations!</p>
            <button type="button" className="go-ahead-button" onClick={handleCloseResult}>
              Close
            </button>
          </div>
        </div>
      )}

      {celebrationOpen && (
        <div className="celebration-screen" role="presentation">
          <div className="fireworks-layer" aria-hidden="true">
            {fireworks.map((firework, index) => (
              <span
                key={index}
                className="firework"
                style={{
                  left: firework.left,
                  top: firework.top,
                  width: `${firework.size}px`,
                  height: `${firework.size}px`,
                  background: firework.color,
                  animationDelay: firework.delay,
                  boxShadow: `0 0 18px ${firework.color}`
                }}
              />
            ))}
          </div>

          <div className="celebration-content">
            <div className="celebration-heart" aria-hidden="true">♥</div>
            <p className="celebration-tag">A promise</p>
            <h2>Our forever starts here</h2>
            <p className="celebration-text">You are my favorite person, my softest peace, and my dream come true.</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
