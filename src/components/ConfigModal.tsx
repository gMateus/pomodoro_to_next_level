import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/ConfigModal.module.css'

export function ConfigModal() {

    const { selecionandoThemeDefault, selecionandoDayTheme, selecionandoNightTheme } = useContext(ThemeContext)

    return (

        <div className={styles.configOpen} style={{ height: '10rem' }}>
            <strong> Mudar tema</strong>
            <button className={styles.theme} onClick={selecionandoThemeDefault}>Padrão</button>
            <button className={styles.theme} onClick={selecionandoNightTheme}>Tema escuro</button>
            <button className={styles.theme} onClick={selecionandoDayTheme}>Azul</button>
            <button className={styles.theme} onClick={() => alert('Em breve')}>Azul escuro</button>
        </div>
    )
}