import { render } from '@testing-library/react';
import App from './App';

test('Does not explode', () => {
  render(<App />);
});
