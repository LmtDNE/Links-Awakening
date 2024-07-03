import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import HelloWorld from '../components/LinkManager';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
