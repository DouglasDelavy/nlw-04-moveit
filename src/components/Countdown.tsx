import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

const Countdown = () => {
  const { 
    time,
    minutes, 
    seconds, 
    isActive, 
    hasFinished, 
    resetCoutdown, 
    startCountdown 
  } = useContext(CountdownContext);

  const currentTime = Math.round(time / 15);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? ( 
        <button 
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo encerrado
          <img src="icons/level.svg" alt="LevelUp" />
        </button>
       ) : (
         <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCoutdown}
            >
              Abandonar ciclo
              <div 
                className={styles.borderButton} 
                style={{ width: `${currentTime}%` }} 
              />
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
         </>
       )}
    </div>
  );
}

export default Countdown;