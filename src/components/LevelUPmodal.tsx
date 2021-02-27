import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {

    const { level, closeLevelUpModalOpen } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>
                    {level}
                </header>

                <strong>Parabéns!</strong>
                <p>Você subiu de nível!</p>

                <button onClick={closeLevelUpModalOpen}>
                    <img src="icons/close.svg" alt="" />
                </button>
            </div>
        </div>
    )
}
