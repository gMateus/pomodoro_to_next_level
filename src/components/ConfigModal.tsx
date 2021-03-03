import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {

    const { escolhendoTemaAtual, isConfigureOpen } = useContext(ThemeContext)

    const [currentHeight, setCurrentHeight] = useState('10rem')

    useEffect(() => {
        //alert(isConfigureOpen)
        setCurrentHeight('15rem')

    }, [isConfigureOpen])


    return (

        <div className={styles.configOpen} style={{ height: `${currentHeight}` }} >
            <strong> Mudar tema</strong>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual(0)}>Padrão</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual(2)}>Tema escuro</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual(1)}>Azul</button>
            <button className={styles.theme} onClick={() => alert('Em breve')}>Azul escuro</button>
        </div>
    )
};
