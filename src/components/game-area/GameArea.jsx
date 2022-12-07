import styles from './GameArea.module.scss';

const GameArea = ({children}) => {

  return (
    <div className={styles['game-area-wrapper']}>
      <div className={styles['game-area']}>
        {children}
      </div>
    </div>
  )
}

export default GameArea;
