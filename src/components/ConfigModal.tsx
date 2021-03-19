import { useContext, useEffect, useState } from 'react';
import { ConfigModalContext } from '../contexts/ConfigModal';
import { ProfileContext } from '../contexts/ProfileContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {

    const { escolhendoTemaAtual } = useContext(ThemeContext)
    const { isConfigureOpen } = useContext(ConfigModalContext)
    const { alterarNome, alterarFoto } = useContext(ProfileContext)

    const [currentHeight, setCurrentHeight] = useState('3rem')
    const [currentMarginTop, setCurrentMarginTop] = useState('1rem')

    useEffect(() => {
        setCurrentHeight('20rem')
        setCurrentMarginTop('2.4rem')

    }, [isConfigureOpen])

    function mudarNome() {
        alterarNome()
    }

    function mudarFoto() {
        alterarFoto();
    }

    //78  76 87 52
    return (
        <div className={styles.overlay}>
            <div
                className={styles.configOpen}
                style={{
                    padding: '1rem'
                }} >
                <h1 style={{ height: '3rem' }}> Configurações</h1>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '1.3rem'
                    }}>
                    <h2>Escolher tema</h2>
                    <div>
                        <button
                            className={styles.theme} style={{ background: 'white', color: 'black' }}
                            onClick={() => escolhendoTemaAtual('defaultTheme')}
                        >Padrão</button>
                        <button
                            className={styles.theme} style={{ background: 'black', color: 'white' }}
                            onClick={() => escolhendoTemaAtual('darkDefaultTheme')}
                        >Tema escuro</button>
                        <button
                            className={styles.theme} style={{ background: 'cyan', color: 'black' }}
                            onClick={() => escolhendoTemaAtual('blueTheme')}
                        >Azul</button>
                        <button
                            className={styles.theme} style={{ background: 'blue', color: 'white' }}
                            onClick={() => escolhendoTemaAtual('darkBlueTheme')}
                        >Azul escuro</button>

                    </div>
                </div>
                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <button
                            className={styles.buttonStyle}
                            onClick={mudarNome}
                        >Alterar nome</button>
                    </div>
                    <div>
                        <button
                            className={styles.buttonStyle}
                            onClick={mudarFoto}
                        >Mudar Foto</button>
                    </div>
                    <div>
                        <button
                            className={styles.buttonStyle}
                            onClick={mudarFoto}
                        >Alterar senha</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
