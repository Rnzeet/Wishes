import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the date invitation question and submit button', () => {
  render(<App />);

  expect(screen.getByText(/will you go for a date with me\?/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
