import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/Profile.module.css'
import { FaCamera } from 'react-icons/fa';
import Cookies from 'js-cookie'

export function Profile() {

    const { level } = useContext(ChallengesContext)
    //const { colorNameProfile } = useContext(ThemeContext)
    const name = Cookies.get('name')
    const imgPath = Cookies.get('imagePath');

    return (
        <div className={styles.profileContainer}>
            <img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={`https://pomodorotonextlevel.herokuapp.com/files/${imgPath}`} alt={`${name}-image`} />
            <div className={styles.nameAndLevel}>
                <strong className={styles.nameContainer}>
                    {name}
                </strong>
                <p>Level {level}</p>
            </div>
        </div >
    )
}
