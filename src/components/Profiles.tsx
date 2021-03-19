import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'
import { FaCamera } from 'react-icons/fa';
import Cookies from 'js-cookie'

export function Profile() {

    const level = Cookies.get('level')
    const { colorNameProfile } = useContext(ThemeContext)
    const { fotoProfile } = useContext(ProfileContext)
    const name = Cookies.get('name')
    const imgPath = fotoProfile

    //console.log('console profile ' + imgPath)
    //console.log('console name ' + name)

    return (
        <div className={styles.profileContainer}>
            <img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={`http://localhost:3001/files/${imgPath}`} alt={`${name}-image`} />
            <div className={styles.nameAndLevel}>
                <strong className={styles.nameContainer} style={{ color: colorNameProfile }}>
                    {name}
                </strong>
                <p style={{ color: colorNameProfile }}>Level {level}</p>
            </div>
        </div >
    )
}
