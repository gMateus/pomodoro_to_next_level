import { useContext, useState } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/ShowNameModal.module.css'

export function NameModal() {

    const { setNomeProfile, confirmeThanUserAlreadySetName } = useContext(ProfileContext)

    const [currentName, setCurrentName] = useState("")



    function getName(nameValue) {
        setCurrentName(nameValue)
    }


    //function confirmarName() {
    //    console.log('currentName is' + currentName)
    //    setNomeProfile(currentName)
    //}

    function testando() {
        const inputNameValor = (document.getElementById('inputName') as HTMLInputElement).value
        console.log(inputNameValor)
        setNomeProfile(inputNameValor)
        confirmeThanUserAlreadySetName()
    }


    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <strong> Digite seu nome</strong>
                <input type="text" id="inputName" maxLength={18} placeholder="Digite aqui." />
                <button onClick={testando}> confirmar</button>
            </div>
        </div>
    )
}
