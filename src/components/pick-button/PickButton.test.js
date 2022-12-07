import {render, screen} from '@testing-library/react';
import PickButton from "./PickButton";
import AppContext from "../../store/app-context";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {ROCK} from "../../const/game-types";


const mockSetPlayerPick = jest.fn();

const MockPickButton = (type) => {
    return (
        <AppContext.Provider value={{setPlayerPick: mockSetPlayerPick}}>
            <BrowserRouter>
                <PickButton type={type}/>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

describe('PickButton Component', () => {
    it('invoke setUserPick onClick to pick user current choice', () => {
        render(<MockPickButton type={ROCK}/>);
        userEvent.click(screen.getByLabelText('button'));
        expect(mockSetPlayerPick).toHaveBeenCalled();
    });
})


