import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    const { colorNameProfile } = useContext(ThemeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gMateus.png" alt="Mateus Guerreiro" />

            <div>
                <strong style={{ color: colorNameProfile }}>
                    Mateus Guerreiro
                    <p>level {level}</p>
                </strong>
            </div>
        </div>
    )
}
