import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the date invitation question and opens the follow-up popup and questions', () => {
  render(<App />);

  expect(screen.getByText(/will you go for a date with me\?/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/before accepting, here are a few questions for you\./i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /go ahead/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /go ahead/i }));

  expect(screen.getByText(/answer these questions/i)).toBeInTheDocument();
  expect(screen.getByText(/what day was our first kiss\?/i)).toBeInTheDocument();
  expect(screen.getByText(/what was our favorite place to go together\?/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /proceed/i })).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('button', { name: /b\. 9 july 2026/i })[0]);
  fireEvent.click(screen.getAllByRole('button', { name: /b\. a rooftop restaurant/i })[0]);
  fireEvent.click(screen.getAllByRole('button', { name: /b\. absolutely yes/i })[0]);

  fireEvent.click(screen.getByRole('button', { name: /proceed/i }));

  expect(screen.getByText(/out of 3, you have scored 3/i)).toBeInTheDocument();
  expect(screen.getByText(/congratulations!/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  expect(screen.getByText(/our forever starts here/i)).toBeInTheDocument();
});
