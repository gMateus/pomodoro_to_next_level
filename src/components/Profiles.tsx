import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'

import { FaCamera } from 'react-icons/fa';


export function Profile() {


    const { level } = useContext(ChallengesContext)

    const { colorNameProfile } = useContext(ThemeContext)

    const { nomeProfile } = useContext(ProfileContext)




    return (
        <div className={styles.profileContainer}>
            <div className={styles.photoContainer}>
                <div className={styles.headIconPhoto}></div>
                <div className={styles.bodyIconPhoto}></div>
                <div onClick={event => alert('Em breve...')}>
                    <FaCamera />
                </div>

            </div>

            <div className={styles.nameAndLevel}>
                <strong className={styles.nameContainer} style={{ color: colorNameProfile }}>
                    {nomeProfile}

                </strong>
                <p style={{ color: colorNameProfile }}>Level {level}</p>
            </div>
        </div >
    )
}
