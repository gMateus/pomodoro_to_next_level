import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/ChangeTheme.module.css'

import { FaSun } from 'react-icons/fa'

import { BsMoon } from 'react-icons/bs'

import { ConfigModal } from "../components/ConfigModal"

export function ChangeTheme() {

    const [isConfigOpen, setIsConfigOpen] = useState(false)

    function mudarTema() {
        if (isConfigOpen === false) {
            setIsConfigOpen(true)
        } else {
            setIsConfigOpen(false)
        }
    }

    return (
        <div className={styles.container} onClick={mudarTema}>
            <div className={styles.theme}>
                <img src="icons/Frame_1_(1).svg" style={{ height: '20px', margin: '0' }} alt="" />
            </div>
            {isConfigOpen && <ConfigModal />}
        </div>
    )
}