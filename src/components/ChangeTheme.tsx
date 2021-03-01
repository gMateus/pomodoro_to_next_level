import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/ChangeTheme.module.css'

import { FaSun } from 'react-icons/fa'

import { BsMoon } from 'react-icons/bs'


export function ChangeTheme() {

    const { selecionandoThemeDefault, selecionandoDayTheme, selecionandoNightTheme } = useContext(ThemeContext)


    return (
        <div className={styles.theme}>
            <div className={styles.defaultTheme} onClick={selecionandoThemeDefault}>
                <FaSun />
            </div>
            <div className={styles.dayTheme} onClick={selecionandoDayTheme}>

            </div>
            <div className={styles.darkTheme} onClick={selecionandoNightTheme}>
                <BsMoon />
            </div>
        </div>
    )
}