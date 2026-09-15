import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Yay! I can’t wait for our date!');
  };

  return (
    <main className="page-shell">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

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
    </main>
  );
}

export default App;
