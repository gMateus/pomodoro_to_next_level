import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/ChangeTheme.module.css'
import { ConfigModal } from "../components/ConfigModal"
import { ThemeContext } from '../contexts/ThemeContext'
import { ConfigModalContext } from '../contexts/ConfigModal'

//import { FaSun } from 'react-icons/fa'
//import { BsMoon } from 'react-icons/bs'

export function ChangeTheme() {

    const { isConfigureOpen, configureModal } = useContext(ConfigModalContext)

    function openChangeThemeMenu() {

        if (isConfigureOpen === false) {
            configureModal()
        } else {
            configureModal()
        }
    };

    return (
        <div className={styles.container} onClick={openChangeThemeMenu}>
            <div className={styles.theme}>
                <img src="icons/Frame_1_(4).svg" style={{ height: '1.4rem', margin: 0 }} alt="" />
            </div>
            {isConfigureOpen && <ConfigModal />}
        </div>
    )
};
