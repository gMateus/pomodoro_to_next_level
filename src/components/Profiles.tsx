import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'

import { FaCamera } from 'react-icons/fa';


export function Profile() {


    const { level } = useContext(ChallengesContext)

    const { colorNameProfile } = useContext(ThemeContext)

    const { nomeProfile, alterarNome } = useContext(ProfileContext)

    function mudarNome() {
        alterarNome()
    }

    function emBreve() {
        alert('Em breve...')
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.photoContainer}>
                <img src="https://github.com/gMateus.png" alt="Mateus Guerreiro" />
                <div onClick={emBreve}> <FaCamera /> </div>
            </div>

            <div className={styles.nameAndLevel}>
                <strong className={styles.nameContainer} style={{ color: colorNameProfile }}>
                    {nomeProfile}
                    <button className={styles.buttonStyle} onClick={mudarNome}>Alterar nome</button>
                </strong>
                <p style={{ color: colorNameProfile, fontWeight: 'bold' }}>level {level}</p>
            </div>
        </div >
    )
}
