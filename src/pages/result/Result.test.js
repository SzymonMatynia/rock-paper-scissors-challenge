import {render, screen, waitFor} from '@testing-library/react';
import Result from "./Result";
import {BrowserRouter} from "react-router-dom";
import AppContext from "../../store/app-context";
import {PAPER, ROCK, SCISSORS} from "../../const/game-types";
import {DRAW, LOSS, WIN} from "../../const/game-results";

const mockChangeScore = jest.fn();
const mockSetPlayerPick = jest.fn();

const MockResult = ({picks}) => {
    return (
        <AppContext.Provider value={{changeScore: mockChangeScore, picks: picks, setPlayerPick: mockSetPlayerPick}}>
            <BrowserRouter>
                <Result/>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

describe('Result Page Component', () => {
    it('renders play again button if game has result', () => {
        render(<MockResult picks={{user: SCISSORS, computer: ROCK}}/>);
        expect(screen.getByText(/PLAY AGAIN/i)).toBeInTheDocument();
    });

    it('produces win game result if picked winning type', () => {
        render(<MockResult picks={{user: SCISSORS, computer: PAPER}}/>);
        expect(screen.getByText(new RegExp(WIN, 'i'))).toBeInTheDocument()
    });

    it('produces loss game result if picked losing type', () => {
        render(<MockResult picks={{user: PAPER, computer: SCISSORS}}/>);
        expect(screen.getByText(new RegExp(LOSS, 'i'))).toBeInTheDocument()
    });

    it('produces draw game result if both sides provided same input', () => {
        render(<MockResult picks={{user: SCISSORS, computer: SCISSORS}}/>);
        expect(screen.getByText(new RegExp(DRAW, 'i'))).toBeInTheDocument()
    });

    it('calls function to set computer type', async () => {
        jest.useFakeTimers()
        render(<MockResult picks={{user: SCISSORS, computer: undefined}}/>);
        jest.runAllTimers()
        await waitFor(() => expect(mockSetPlayerPick).toHaveBeenCalled())
        jest.useRealTimers();
    });

    it('calls changeScore if someone win', async () => {
        render(<MockResult picks={{user: SCISSORS, computer: ROCK}}/>);
        expect(mockChangeScore).toHaveBeenCalled();
    });

    it('do not call changeScore if game result is draw', async () => {
        render(<MockResult picks={{user: SCISSORS, computer: SCISSORS}}/>);
        expect(mockChangeScore).toHaveBeenCalledTimes(0);
    });
})


