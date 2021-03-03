import { createContext, ReactNode, useState } from "react"
import { ConfigModal } from "../components/ConfigModal"

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextData {
    currentTheme: string;
    selecionandoThemeDefault: () => void;
    selecionandoDayTheme: () => void;
    selecionandoNightTheme: () => void;
    backgroundTheme: string;
    colorNameProfile: string;
    colorTextExperienceBar: string;
    colorTextCompleteChallenge: string;
    logoTheme: string;
}


export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children, ...rest }: ThemeContextProps) {


    const [currentTheme, setCurrentTheme] = useState('default')


    const [backgroundTheme, setBackGroundTheme] = useState('var(--background)')

    const [colorNameProfile, setColorNameProfile] = useState('#666666')

    const [colorTextExperienceBar, setColorTextExperienceBar] = useState('var(--title)')

    const [colorTextCompleteChallenge, setcolorTextCompleteChallenge] = useState('var(--title)')

    const [logoTheme, setThemeLogo] = useState('icons/Group_1_black.svg')



    function selecionandoThemeDefault() {
        setBackGroundTheme('var(--background)')
        setColorNameProfile('var(--title)')
        setColorTextExperienceBar('var(--title)')
        setcolorTextCompleteChallenge('var(--title)')
        setThemeLogo('icons/Group_1_black.svg')

    }

    function selecionandoDayTheme() {
        setBackGroundTheme('#00BFFF')
        setColorNameProfile('var(--white)')
        setColorTextExperienceBar('var(--white)')
        setcolorTextCompleteChallenge('var(--white)')
        setThemeLogo('icons/Group_1_white.svg')
    }

    function selecionandoNightTheme() {
        setBackGroundTheme('#666666')
        setColorNameProfile('#DCDDE0')
        setColorTextExperienceBar('#DCDDE0')
        setcolorTextCompleteChallenge('#DCDDE0')
        setThemeLogo('icons/Group_1_white.svg')
    }


    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                selecionandoThemeDefault,
                selecionandoDayTheme,
                selecionandoNightTheme,
                backgroundTheme,
                colorNameProfile,
                colorTextExperienceBar,
                colorTextCompleteChallenge,
                logoTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}