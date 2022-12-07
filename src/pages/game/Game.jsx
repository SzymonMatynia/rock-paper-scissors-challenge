import PickButton from "../../components/pick-button/PickButton.jsx";
import React from "react";
import GameArea from "../../components/game-area/GameArea.jsx";
import styles from './Game.module.scss';
import {TYPES} from "../../const/game-types";

const Game = () => {
    return (
        <GameArea>
            <div className={styles['triangle-container']}>
                {
                    TYPES.map(type => {
                        return (
                            <PickButton key={type} type={type}/>
                        )
                    })

                }
            </div>
        </GameArea>
    )

}

export default Game;
