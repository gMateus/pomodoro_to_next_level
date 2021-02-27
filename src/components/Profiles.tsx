import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gMateus.png" alt="Mateus Guerreiro" />

            <div>
                <strong>
                    Mateus Guerreiro
                    <p>level {level}</p>
                </strong>
            </div>
        </div>
    )
}
