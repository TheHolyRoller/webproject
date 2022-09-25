import { render, screen } from '@testing-library/react';
import App from './App';
//Personal Access Token
//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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
