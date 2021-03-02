import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {


    const { level } = useContext(ChallengesContext)

    const { colorNameProfile } = useContext(ThemeContext)

    const { nomeProfile } = useContext(ProfileContext)




    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gMateus.png" alt="Mateus Guerreiro">

            </img>

            <div>
                <strong style={{ color: colorNameProfile }}>
                    {nomeProfile}
                    <p>level {level}</p>
                </strong>
            </div>
        </div>
    )
}
