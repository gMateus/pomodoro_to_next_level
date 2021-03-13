import Cookies from 'js-cookie';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {

    const { completedChallenges } = useContext(ChallengesContext)
    const { colorTextCompleteChallenge } = useContext(ThemeContext)


    return (
        <div className={styles.completeChallengesContainer}
            style={{ color: colorTextCompleteChallenge }}>
            <span>Desafios completos</span>
            <span>{completedChallenges}</span>
        </div>
    )
};
