import Cookies from "js-cookie"
import React, { createContext, ReactNode, useEffect, useState } from "react"
import { IconsProfileModal } from "../components/IconsProfileModal"
import { NameModal } from "../components/NameModal"


interface ProfileContextData {
    nomeProfile: string;
    confirmeThanUserAlreadySetName: () => void;
    isUserAlreadySetName: boolean;
    isGetNameModalOpen: boolean;
    alterarNome: () => void;
    alterandoNome: (nome) => void;
    alterarFoto: () => void;
    fotoProfile: string;
    fecharModal: () => void;
}

interface ProfileProviderProps {
    children: ReactNode,
    nomeProfile: string,
    isUserAlreadySetName: boolean,
    isGetNameModalOpen: boolean,
    avatarProfile: string

}

interface currentNameProps {
    nome: string;
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {

    const [nomeProfile, setNomeProfile] = useState(rest.nomeProfile)

    const [fotoProfile, setFotoProfile] = useState(rest.avatarProfile)

    const [isGetNameModalOpen, setIsGetNameModalOpen] = useState(rest.isGetNameModalOpen)
    const [isUserAlreadySetName, setIsUserAlreadySetName] = useState(rest.isUserAlreadySetName)

    const [isGetProfileModalOpen, setIsGetProfileModalOpen] = useState(rest.isGetNameModalOpen)
    const [isUserAlreadySetPhoto, setIsUserAlreadySetPhoto] = useState(rest.isUserAlreadySetName)

    function alterandoNome(nome) {
        if (nome.length > 0 && nome.length <= 18) {
            setNomeProfile(nome)
        } else {
            alert('Tem alguma coisa errada com o seu nome.')
        }
    }

    function fecharModal() {
        setIsGetProfileModalOpen(false)
    }

    function confirmeThanUserAlreadySetName() {
        setIsUserAlreadySetName(true)
        setIsGetNameModalOpen(false)
        console.log('Usuário já escolheu o nome.')
    }

    function alterarFoto() {
        setIsUserAlreadySetPhoto(false)
        setIsGetProfileModalOpen(true)
    }

    function alterarNome() {
        setIsUserAlreadySetName(false)
        setIsGetNameModalOpen(true)
    }

    useEffect(() => {
        Cookies.set('nomeProfile', String(nomeProfile), { expires: 31 })
        //console.log('nome profile is ' + nomeProfile)
        Cookies.set('isUserAlreadySetName', String(isUserAlreadySetName), { expires: 31 })
        //console.log('isUserAlreadySetName is ' + isUserAlreadySetName)
        Cookies.set('isGetNameModalOpen', String(isGetNameModalOpen), { expires: 31 })
        //console.log('isGetNameModalOpen is ' + isGetNameModalOpen)
        Cookies.set('imagePath', String(fotoProfile), { expires: 31 })
    }, [nomeProfile, isGetNameModalOpen, isUserAlreadySetName, fotoProfile])

    return (
        <ProfileContext.Provider
            value={{
                nomeProfile,
                confirmeThanUserAlreadySetName,
                isUserAlreadySetName,
                isGetNameModalOpen,
                alterarNome,
                alterandoNome,
                alterarFoto,
                fotoProfile,
                fecharModal
            }}
        >
            {children}
            { isUserAlreadySetName ? null : isGetNameModalOpen && <NameModal />}
            { isUserAlreadySetPhoto ? null : isGetProfileModalOpen && <IconsProfileModal />}
        </ProfileContext.Provider>
    )
}
