import { render } from '@testing-library/react';
import Header from './Header';

test('Does not explode', () => {
  render(<Header />);
});