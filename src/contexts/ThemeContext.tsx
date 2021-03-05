import Cookies from "js-cookie"
import { createContext, ReactNode, useEffect, useState } from "react"

interface ThemeContextProps {
    children: ReactNode;
    currentTheme: string;
}

interface ThemeContextData {
    currentTheme: string;
    backgroundTheme: string;
    colorNameProfile: string;
    colorTextExperienceBar: string;
    colorTextCompleteChallenge: string;
    logoColorTheme: string;
    escolhendoTemaAtual: (temaEscolhido) => void;
    backgroundChallengeBox: string;
    challengeNotActiveTextColor: string;
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children, ...rest }: ThemeContextProps) {

    const [currentTheme, setCurrentTheme] = useState(rest.currentTheme)
    const [backgroundTheme, setBackGroundTheme] = useState('var(--background)')
    const [colorNameProfile, setColorNameProfile] = useState('var(--title)')
    const [colorTextExperienceBar, setColorTextExperienceBar] = useState('var(--title)')
    const [colorTextCompleteChallenge, setcolorTextCompleteChallenge] = useState('var(--title)')
    const [logoColorTheme, setColorThemeLogo] = useState('icons/Group_1_black.svg')
    const [backgroundChallengeBox, setBackgrouncChallengeBox] = useState('var(--white)')
    const [challengeNotActiveTextColor, setChallengeNotActiveTextColor] = useState('#666666')



    useEffect(() => {
        if (currentTheme == 'defaultTheme') {
            selecionandoThemeDefault();
        } else if (currentTheme == 'darkDefaultTheme') {
            selecionandoNightTheme()
        } else if (currentTheme == 'blueTheme') {
            selecionandoDayTheme();
        } else if (currentTheme == 'darkBlueTheme') {
            selecionandoDarkBlueTheme()
        }

        Cookies.set('currentTheme', String(currentTheme))
    }, [currentTheme])


    function escolhendoTemaAtual(temaEscolhido) {
        if (temaEscolhido == 'defaultTheme') {
            setCurrentTheme('defaultTheme')
        } else if (temaEscolhido == 'darkDefaultTheme') {
            setCurrentTheme('darkDefaultTheme')
        } else if (temaEscolhido == 'blueTheme') {
            setCurrentTheme('blueTheme')
        } else if (temaEscolhido == 'darkBlueTheme') {
            setCurrentTheme('darkBlueTheme')
        }
    }

    function selecionandoThemeDefault() {
        setBackGroundTheme('var(--background)')
        setColorNameProfile('var(--title)')
        setColorTextExperienceBar('var(--title)')
        setcolorTextCompleteChallenge('var(--title)')
        setColorThemeLogo('icons/Group_1_black.svg')
        setBackgrouncChallengeBox('var(--white)')
        setChallengeNotActiveTextColor('var(--title)')

    }

    function selecionandoDayTheme() {
        setBackGroundTheme('#81DAF5')
        setColorNameProfile('var(--title)')
        setColorTextExperienceBar('var(--title)')
        setcolorTextCompleteChallenge('var(--title)')
        setColorThemeLogo('icons/Group_1_white.svg')
        setBackgrouncChallengeBox('#00BFFF')
        setChallengeNotActiveTextColor('var(--title)')
    }

    function selecionandoNightTheme() {
        setBackGroundTheme('#666666')
        setColorNameProfile('#DCDDE0')
        setColorTextExperienceBar('#DCDDE0')
        setcolorTextCompleteChallenge('#DCDDE0')
        setColorThemeLogo('icons/Group_1_white.svg')
        setBackgrouncChallengeBox('#585858')
        setChallengeNotActiveTextColor('var(--gray-line')
    }

    function selecionandoDarkBlueTheme() {
        setBackGroundTheme('#0B3861')
        setColorNameProfile('var(--white)')
        setColorTextExperienceBar('var(--white)')
        setcolorTextCompleteChallenge('var(--white)')
        setColorThemeLogo('icons/Group_1_white.svg')
        setBackgrouncChallengeBox('var(--blue-dark)')
        setChallengeNotActiveTextColor('var(--white)')
    }


    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                backgroundTheme,
                colorNameProfile,
                colorTextExperienceBar,
                colorTextCompleteChallenge,
                logoColorTheme,
                escolhendoTemaAtual,
                backgroundChallengeBox,
                challengeNotActiveTextColor

            }}>
            {children}
        </ThemeContext.Provider>
    )
}