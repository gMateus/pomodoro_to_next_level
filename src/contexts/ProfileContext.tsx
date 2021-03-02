import Cookies from "js-cookie"
import { createContext, ReactNode, useEffect, useState } from "react"
import { NameModal } from "../components/NameModal"


interface ProfileContextData {
    nomeProfile: string;
    styliengInput: object;
    setNomeProfile: (nome) => void;
    confirmeThanUserAlreadySetName: () => void;
    isUserAlreadySetName: boolean;
    isGetNameModalOpen: boolean;
}

interface ProfileProviderProps {
    children: ReactNode,
    nomeProfile: string,
    isUserAlreadySetName: boolean,
    isGetNameModalOpen: boolean
}

interface currentNameProps {
    nome: string;
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {

    const styliengInput = {
        background: 'none',
        border: 'none',
        width: '9rem',
        maxLenght: "10",

    }
    const [nomeProfile, setNomeProfile] = useState(rest.nomeProfile)

    const [isGetNameModalOpen, setIsGetNameModalOpen] = useState(rest.isGetNameModalOpen)

    const [isUserAlreadySetName, setIsUserAlreadySetName] = useState(rest.isUserAlreadySetName)



    function confirmeThanUserAlreadySetName() {
        setIsUserAlreadySetName(true)
        setIsGetNameModalOpen(false)
        console.log('usuario ja escolheu o nome')
        //closeNameModalOpen()
    }


    useEffect(() => {
        Cookies.set('nomeProfile', String(nomeProfile))
        console.log('nome profile is ' + nomeProfile)

        Cookies.set('isUserAlreadySetName', String(isUserAlreadySetName))
        console.log('isUserAlreadySetName is ' + isUserAlreadySetName)

        Cookies.set('isGetNameModalOpen', String(isGetNameModalOpen))
        //console.log('isGetNameModalOpen is ' + isGetNameModalOpen)

    }, [nomeProfile, isGetNameModalOpen, isUserAlreadySetName])



    return (
        <ProfileContext.Provider
            value={{
                nomeProfile,
                styliengInput,
                setNomeProfile,
                confirmeThanUserAlreadySetName,
                isUserAlreadySetName,
                isGetNameModalOpen,
            }}
        >
            {children}
            { isUserAlreadySetName ? null : isGetNameModalOpen && <NameModal />}
        </ProfileContext.Provider>
    )
}