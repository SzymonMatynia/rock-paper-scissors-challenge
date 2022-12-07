import {DRAW, LOSS, WIN} from "../const/game-results";
import {PAPER, ROCK, SCISSORS, TYPES} from "../const/game-types";

export function getMatchResult(user, computer) {
    if (!user || !computer) {
        return undefined;
    }

    if (user === computer) {
        return DRAW;
    }

    switch (user) {
        case ROCK:
            return computer !== PAPER ? WIN : LOSS;
        case PAPER:
            return computer !== SCISSORS ? WIN : LOSS;
        case SCISSORS:
            return computer !== ROCK ? WIN : LOSS;
        default:
            throw new Error(`There is not such case implemented: ${user}`)
    }
}

export function getRandomPick() {
    return TYPES[Math.floor(Math.random() * TYPES.length)];
}
