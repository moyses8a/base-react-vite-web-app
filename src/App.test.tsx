import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Renders hi', () => {
    // arrange
    render(<App />);
    // act
    // expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('home');
  });
});
