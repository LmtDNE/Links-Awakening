import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import HelloWorld from '../components/HelloWorld';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
