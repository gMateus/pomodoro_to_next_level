import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function Challengesbox() {


    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    const { resetCountDown } = useContext(CountDownContext)

    function handlerSucceededChallenge() {
        resetCountDown()
        completeChallenge()
    }

    function handlerFailedChallenge() {
        resetChallenge()
        resetCountDown()
    }

    return (
        <div className={styles.challengesBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> {activeChallenge.amount} </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handlerFailedChallenge}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handlerSucceededChallenge}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong> Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Avance de nível completando os desafios
                        </p>
                    </div>
                )}
        </div>
    )
}
