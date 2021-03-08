import { useContext, useEffect, useState } from 'react';
import { ConfigModalContext } from '../contexts/ConfigModal';
import { ProfileContext } from '../contexts/ProfileContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {

    const { escolhendoTemaAtual } = useContext(ThemeContext)
    const { isConfigureOpen } = useContext(ConfigModalContext)
    const { alterarNome } = useContext(ProfileContext)

    const [currentHeight, setCurrentHeight] = useState('3rem')
    const [currentMarginTop, setCurrentMarginTop] = useState('1rem')

    useEffect(() => {
        //console.log(isConfigureOpen)
        setCurrentHeight('13.5rem')
        setCurrentMarginTop('2.4rem')

    }, [isConfigureOpen])

    function mudarNome() {
        alterarNome()
    }

    //78  76 87 52
    return (
        <div className={styles.configOpen} style={{ height: `${currentHeight}`, marginTop: `${currentMarginTop}` }} >
            <strong /*onClick={() => escolhendoTemaAtual('especialTheme')}*/> Mudar tema</strong>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('defaultTheme')}>Padrão</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('darkDefaultTheme')}>Tema escuro</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('blueTheme')}>Azul</button>
            <button className={styles.theme} onClick={() => escolhendoTemaAtual('darkBlueTheme')}>Azul escuro</button>
            <div>
                <button className={styles.buttonStyle} onClick={mudarNome}>Alterar nome</button>
            </div>
        </div>
    )
};
