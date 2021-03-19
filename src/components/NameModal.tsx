import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useCallback, useContext, useRef, useState } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import api from '../pages/api/api'
import styles from '../styles/components/ShowNameModal.module.css'

interface responseData {
    name: string;
}

export function NameModal() {

    const { alterandoNome, confirmeThanUserAlreadySetName } = useContext(ProfileContext)

    /*function mudandoNomeUsuario() {
        const inputNameValor = (document.getElementById('inputName') as HTMLInputElement).value

        if (inputNameValor.length > 0 && inputNameValor.length < 18) {
            console.log(inputNameValor)
            alterandoNome(inputNameValor)
            confirmeThanUserAlreadySetName()
        } else {
            alert('O campo está vazio, tente de novo.')
        }
    }*/

    const [name, setName] = useState('')
    const router = useRouter()
    const userId = Cookies.get('userId')

    const mudandoNomeUsuario = useCallback(async () => {


        if (!name || !userId) {
            return;
        }

        try {
            const response = await api.put('alterandoName', { "userId": `${userId}`, "name": `${name}` })
            const data = response.data as responseData;
            Cookies.set('name', String(name));

        } catch (err) {
            return alert('Tem algo errado')
        }

        confirmeThanUserAlreadySetName()
        router.push('/');
    }, [name])

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <strong> Digite seu nome</strong>
                <input type="text" id="inputName" maxLength={18} placeholder="Digite aqui."
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <button onClick={mudandoNomeUsuario}> confirmar</button>
            </div>
        </div>
    )
}
