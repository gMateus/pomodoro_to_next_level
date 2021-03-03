import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/ChangeTheme.module.css'
import { ConfigModal } from "../components/ConfigModal"
import { ThemeContext } from '../contexts/ThemeContext'

//import { FaSun } from 'react-icons/fa'
//import { BsMoon } from 'react-icons/bs'

export function ChangeTheme() {

    const { isConfigureOpen, configureModal } = useContext(ThemeContext)

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
                <img src="icons/Frame_1_(1).svg" style={{ height: '17px', margin: '0' }} alt="" />
            </div>
            {isConfigureOpen && <ConfigModal />}
        </div>
    )
};
