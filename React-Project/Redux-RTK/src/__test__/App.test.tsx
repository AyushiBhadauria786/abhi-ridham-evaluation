import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest';
import App from '../App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug();
  })
})

describe("A truthy statement", () => {
    it("should be equal to 2", () => {
      expect(1 + 1).toEqual(2);
    });
  });

  