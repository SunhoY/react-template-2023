import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MyButton } from './Button';

it('클릭하면 onClick 을 실행한다.', () => {
  const mockOnClick = jest.fn();
  render(<MyButton text="Hello" onClick={mockOnClick} />);

  userEvent.click(screen.getByText('Hello'));

  expect(mockOnClick).toHaveBeenCalled();
});
