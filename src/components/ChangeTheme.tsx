import { useContext } from 'react'
import { ConfigModal } from "../components/ConfigModal"
import { ConfigModalContext } from '../contexts/ConfigModal'

//import { FaSun } from 'react-icons/fa'
//import { BsMoon } from 'react-icons/bs'


export function ChangeTheme() {

    const { isConfigureOpen, configureModal } = useContext(ConfigModalContext)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '3rem',
            height: '3rem',
            transition: 'filter 0.2s'
        }}
            onClick={configureModal}
        >

            <img src="icons/Frame_1_(4).svg"
                style={{
                    height: '1.8rem',
                    padding: '0.2rem',
                    margin: 0,
                    background: 'var(--blue)',
                    borderRadius: '50%'
                }} alt="" />
            {isConfigureOpen && <ConfigModal />}
        </div>
    )
};
