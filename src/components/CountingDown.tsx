import { useContext, useState } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CountingDown.module.css';

export function CountingDown() {

    const {
        minutes,
        seconds,
        startCountDown,
        resetCountDown,
        hasFinished,
        isActive
    } = useContext(CountDownContext)

    const { colorNameProfile, backgroundChallengeBox } = useContext(ThemeContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div className={styles.container}>
            <div className={styles.countingDownContainer}>
                <div style={{ color: colorNameProfile, background: backgroundChallengeBox }}>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span className={styles.pontos} style={{ color: colorNameProfile, fontSize: "4rem" }}>:</span>
                <div style={{ color: colorNameProfile, background: backgroundChallengeBox }}>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo encerrado
                    <img src="icons/sucesso.svg" alt="" />
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar ciclo
                                <img src="" alt="" />
                            </button>
                        ) : (
                                <button
                                    className={styles.countDownButton}
                                    onClick={startCountDown}
                                >
                                    Iniciar ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    )
}
