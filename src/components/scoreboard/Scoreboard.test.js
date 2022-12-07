import { render, screen } from '@testing-library/react';
import Scoreboard from "./Scoreboard";

describe('Scoreboard Component', () => {
  it('renders given score props', () => {
    const mockedScore = 12345;
    render(<Scoreboard score={mockedScore} />);
    const scoreElement = screen.getByText(new RegExp(`${mockedScore}`, 'i'));
    expect(scoreElement).toBeInTheDocument();
  });
})


