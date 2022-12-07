import styles from './Scoreboard.module.scss';

const Scoreboard = ({score}) => {
    return <div className={styles['scoreboard-wrapper']}>
        <div className={styles['scoreboard']}>
            <div className={styles['game-name']}>
                <div className={styles['game-name__element']}>ROCK</div>
                <div className={styles['game-name__element']}>PAPER</div>
                <div className={styles['game-name__element']}>SCISSORS</div>
            </div>
            <div className={styles['game-score']}>
                <div className={styles['game-score__text']}>SCORE</div>
                <div className={styles['game-score__score']}>
                    {score}
                </div>
            </div>
        </div>
    </div>;
};

export default Scoreboard;
