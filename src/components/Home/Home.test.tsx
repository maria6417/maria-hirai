import { render } from '@testing-library/react';
import Home from './Home';

test('Does not explode', () => {
  render(<Home />);
});
