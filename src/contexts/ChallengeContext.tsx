import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from "../components/LevelUPmodal";
import api from "../pages/api/api";


interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    completedChallenges: number;
}


interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    completedChallenges: number;
    startNewChallenge: () => void;
    activeChallenge: challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    closeLevelUpModalOpen: () => void;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience)
    const [completedChallenges, setChallengesCompleted] = useState(rest.completedChallenges)

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpmodalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 5, 2)

    /*useEffect(() => {
        Notification.requestPermission();
    }, [])*/

    async function updateChallengeInfo() {
        const userId = Cookies.get('userId');

        await api.put('/users', {
            userId: Number(userId),
            level,
            currentExperience,
            completedChallenges
        });
    }

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('completedChallenges', String(completedChallenges));

        updateChallengeInfo();

    }, [level, currentExperience, completedChallenges])


    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpmodalOpen(true)
    }

    function closeLevelUpModalOpen() {
        setIsLevelUpmodalOpen(false)
    }

    function startNewChallenge() {
        console.log('New Challenge')
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)


        /*if (Notification.permission === 'granted') {
            new Notification('O tempo acabou.', {
                body: `Complete o desafio para ganhar ${challenge.amount} xp`
            })
        }*/
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {

        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel) {
            levelUp()
            finalExperience = finalExperience - experienceToNextLevel
        }

        setCurrentExperience(finalExperience)
        setChallengesCompleted(completedChallenges + 1)
        setActiveChallenge(null)
    }


    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                experienceToNextLevel,
                currentExperience,
                completedChallenges,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModalOpen
            }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}
