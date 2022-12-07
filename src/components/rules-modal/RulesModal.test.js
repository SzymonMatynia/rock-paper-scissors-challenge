import {render, screen} from '@testing-library/react';
import RulesModal from "./RulesModal";
import userEvent from "@testing-library/user-event";


describe('RulesModal Component', () => {
    it('Has the header containing text "Rules"', () => {
        render(<RulesModal show={true} handleClose={() => {
        }}/>);
        expect(screen.getByText('Rules')).toBeInTheDocument();
    });

    it('Renders close button which handles onClick event', () => {
        const mock = jest.fn();
        render(<RulesModal show={true} handleClose={mock}/>);
        const button = screen.getByLabelText('close');
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        expect(mock).toHaveBeenCalled();
    });
})


