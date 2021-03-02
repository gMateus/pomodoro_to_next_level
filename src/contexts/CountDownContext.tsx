import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengesContext } from "./ChallengeContext"

interface CountDownProviderProps {
    children: ReactNode;
}

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    resetCountDown: () => void;
    startCountDown: () => void;
}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({ children }: CountDownProviderProps) {

    let countdownTimeout: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengesContext)


    const totalMinutes = (25 * 60)



    const [time, setTime] = useState(totalMinutes)

    const [isActive, setIsActive] = useState(false)

    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountDown() {
        setIsActive(true)
        setTime(totalMinutes)

    }

    function resetCountDown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(totalMinutes)
        setHasFinished(false)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge();
        }

    }, [isActive, time])

    return (
        <CountDownContext.Provider
            value={{
                startCountDown,
                minutes,
                seconds,
                hasFinished,
                isActive,
                resetCountDown,

            }}>
            {children}
        </CountDownContext.Provider>
    )
}
