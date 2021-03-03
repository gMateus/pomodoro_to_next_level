import { createContext, ReactNode, useState } from "react"

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
    escolhendoTemaAtual: (temaEscolhido) => void;
    configureModal: () => void;
    isConfigureOpen: boolean;
}

interface temaEscolhido {
    temaEscolhido: number;
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children, ...rest }: ThemeContextProps) {


    const [currentTheme, setCurrentTheme] = useState('default')


    const [backgroundTheme, setBackGroundTheme] = useState('var(--background)')

    const [colorNameProfile, setColorNameProfile] = useState('#666666')

    const [colorTextExperienceBar, setColorTextExperienceBar] = useState('var(--title)')

    const [colorTextCompleteChallenge, setcolorTextCompleteChallenge] = useState('var(--title)')

    const [logoTheme, setThemeLogo] = useState('icons/Group_1_black.svg')

    const [isConfigureOpen, setIsConfigureOpen] = useState(true)



    function configureModal() {
        //alert('testee')
        if (isConfigureOpen == true) {
            setIsConfigureOpen(false)
        } else {
            setIsConfigureOpen(true)
        }
    }


    function escolhendoTemaAtual(temaEscolhido) {
        if (temaEscolhido == 0) {
            selecionandoThemeDefault();
        } else if (temaEscolhido == 1) {
            selecionandoDayTheme();
        } else if (temaEscolhido == 2) {
            selecionandoNightTheme()
        }
    }

    function selecionandoThemeDefault() {
        setBackGroundTheme('var(--background)')
        setColorNameProfile('var(--title)')
        setColorTextExperienceBar('var(--title)')
        setcolorTextCompleteChallenge('var(--title)')
        setThemeLogo('icons/Group_1_black.svg')

    }

    function selecionandoDayTheme() {
        setBackGroundTheme('#01A9DB')
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
                logoTheme,
                escolhendoTemaAtual,
                configureModal,
                isConfigureOpen
            }}>
            {children}
        </ThemeContext.Provider>
    )
}