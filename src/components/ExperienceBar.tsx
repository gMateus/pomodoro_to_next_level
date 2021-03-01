import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { ThemeContext } from '../contexts/ThemeContext';

import styles from '../styles/components/ExperienceBar.module.css'


export function ExperienceBar() {


    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const { colorTextExperienceBar } = useContext(ThemeContext)


    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)


    return (
        <div className={styles.experienceBar} style={{ color: colorTextExperienceBar }}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {percentToNextLevel} %
                </span>
            </div>
            <span>{experienceToNextLevel} xp </span>
        </div>

    )
}
