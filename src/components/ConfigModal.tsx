import { useContext, useEffect, useState } from 'react';
import { ConfigModalContext } from '../contexts/ConfigModal';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {

    const { escolhendoTemaAtual } = useContext(ThemeContext)

    const { isConfigureOpen } = useContext(ConfigModalContext)

    const [currentHeight, setCurrentHeight] = useState('10rem')

    useEffect(() => {
        //alert(isConfigureOpen)
        setCurrentHeight('15rem')

    }, [isConfigureOpen])


    return (

        <div className={styles.configOpen} style={{ height: `${currentHeight}` }} >
            <strong> Mudar tema</strong>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('defaultTheme')}>Padrão</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('darkDefaultTheme')}>Tema escuro</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('blueTheme')}>Azul</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('darkBlueTheme')}>Azul escuro</button>
        </div>
    )
};
