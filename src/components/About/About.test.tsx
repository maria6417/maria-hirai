import { render } from '@testing-library/react';
import About from './About';

test('Does not explode', () => {
  render(<About />);
});
