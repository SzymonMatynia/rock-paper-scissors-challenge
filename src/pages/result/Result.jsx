import AppButton from "../../components/button/AppButton.jsx";
import styles from './Result.module.scss';
import PickIndicator from "../../components/pick-indicator/PickIndicator.jsx";
import GameArea from "../../components/game-area/GameArea.jsx";
import {useNavigate} from "react-router-dom";
import AppContext from "../../store/app-context.js";
import React, {useContext, useEffect, useMemo} from "react";
import picksInitialValue from "../../const/picks-initial-value";
import {getMatchResult, getRandomPick} from "../../utils/rock-paper-scissors";
import {P_COMPUTER} from "../../const/players";
import {DRAW, LOSS, WIN} from "../../const/game-results";

const Result = () => {
    const {picks, setPicks, changeScore, setPlayerPick} = useContext(AppContext);

    const navigate = useNavigate();

    const restartGame = () => {
        setPicks({...picksInitialValue});
        navigate('/');
    }

    const gameResult = useMemo(() => {
        return getMatchResult(picks.user, picks.computer);
    }, [picks]);

    useEffect(() => {
        if (!picks.user) {
            navigate('/');
        }
    }, [])

    useEffect(() => {
        if (gameResult && gameResult !== DRAW) {
            changeScore(gameResult === WIN ? 1 : -1);
        }
    }, [gameResult])

    useEffect(() => {
        if (picks.user && !picks.computer) {
            const timeout = setTimeout(() => {
                setPlayerPick(getRandomPick(), P_COMPUTER);
            }, 1000)

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [picks]);

    return (
        <GameArea>
            <div className={styles['result-container']}>
                <div className={styles['result-player']}>
                    <div className={styles['result-player__text']}>You picked</div>
                    <PickIndicator type={picks?.user} isWinning={gameResult === WIN}/>
                </div>

                {
                    gameResult ?
                        <div className={styles['summary']}>
                            <div className={styles['summary__text']}>{gameResult ? gameResult : '?'}</div>
                            <div className={styles['summary-button-wrapper']}>
                                <AppButton onClick={restartGame} content={'PLAY AGAIN'}/>
                            </div>
                        </div> :
                        null
                }
                <div className={styles['result-player']}>
                    <div className={styles['result-player__text']}>The house picked</div>
                    <PickIndicator type={picks?.computer} isWinning={gameResult === LOSS}/>
                </div>

            </div>
        </GameArea>
    )
}

export default Result;
