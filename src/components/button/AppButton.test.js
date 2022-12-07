import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppButton from "./AppButton";
import userEvent from "@testing-library/user-event";

describe('AppButton Component', () => {
  it('renders content inside', () => {
    const content = 'Test button content';
    const mockedContent = <div>{content}</div>;
    render(<AppButton content={mockedContent} />);
    const element = screen.getByText(new RegExp(content, 'i'));
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('DIV');
  });

  it('calls callback function on click', () => {
    const mockedOnClick = jest.fn();
    render(<AppButton content={'click'} onClick={mockedOnClick}/>);
    userEvent.click(screen.getByText('click'));
    expect(mockedOnClick).toHaveBeenCalled();
  });
})
