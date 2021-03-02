import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/ShowNameModal.module.css'

export function NameModal() {

    const { setNomeProfile, confirmeThanUserAlreadySetName } = useContext(ProfileContext)



    function mudandoNomeUsuario() {
        const inputNameValor = (document.getElementById('inputName') as HTMLInputElement).value

        if (inputNameValor.length > 0) {
            console.log(inputNameValor)
            setNomeProfile(inputNameValor)
            confirmeThanUserAlreadySetName()
        } else {
            alert('O campo está vazio, tente de novo.')
        }
    }


    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <strong> Digite seu nome</strong>
                <input type="text" id="inputName" maxLength={18} placeholder="Digite aqui." />
                <button onClick={mudandoNomeUsuario}> confirmar</button>
            </div>
        </div>
    )
}
