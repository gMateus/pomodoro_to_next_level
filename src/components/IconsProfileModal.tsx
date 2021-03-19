import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useCallback, useContext, useRef, useState } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import api from '../pages/api/api'
import styles from '../styles/components/Avatars.module.css'

interface responseData {
    name: string;
}

const iconsClass = {
    margin: '0 5px',
    height: '4rem',
    width: '4rem',
    borderRadius: '50%'
}

export function IconsProfileModal() {

    const [avatar, setAvatar] = useState('')
    const router = useRouter()

    const [hasOpen, setHasOpen] = useState(true)

    const { fecharModal } = useContext(ProfileContext)

    //const imgPath = Cookies.get('imagePath')
    //const userId = Cookies.get('userId')

    /*const mudandoNomeUsuario = useCallback(async () => {

        //if (!imgPath || !userId) {
        //    return;
        //}

        try {
            const response = await api.put('alterandoName',) //{ "userId": `${userId}`, "name": `${name}` })
            const data = response.data as responseData;
            //Cookies.set('name', String(name));

        } catch (err) {
            return alert('Tem algo errado')
        }
        router.push('/leaderboard');
    }, [name])*/

    const avatarList = {
        man: {
            title: 'man',
            imagePath: 'man.svg'
        },
        oldMan: {
            title: 'old-man',
            imagePath: 'old-man.svg'
        },
        user: {
            title: 'user',
            imagePath: 'user.svg',
        },
        girl: {
            title: 'girl',
            imagePath: 'girl.svg',
        },
        fitness: {
            title: 'fitness',
            imagePath: 'fitness.svg',
        },
    }

    /*const teste = useCallback(async () => {

        console.log('????')
        try {
            console.log('q?')
            const response = await api.put('alterandoImg', { "userId": 2, "imagePath": "fitness.svg" })//{ "userId": `${userId}`, "name": `${name}` })
            console.log('ok até aqui')
            const data = response.data as responseData;
            Cookies.set('imagePath', String(avatarList.fitness.imagePath));
            console.log('tudo ok')
        } catch (err) {
            console.log('deu erro')
        }
    }, [avatar])*/

    async function alterandoAvatar(choice) {

        const userId = Cookies.get('userId')

        try {

            if (choice == avatarList.man.title) {
                alert('oi')
                Cookies.set('imagePath', String(avatarList.man.imagePath))
                const response = await api.put('alterandoImg', { "userId": `${userId}`, "imagePath": `${avatarList.man.imagePath}` })

            } else if (choice == avatarList.oldMan.title) {
                alert('tudo bom?')
                const response = await api.put('alterandoImg', { "userId": `${userId}`, "imagePath": `${avatarList.oldMan.imagePath}` })
                Cookies.set('imagePath', String(avatarList.oldMan.imagePath))
            } else if (choice == avatarList.girl.title) {
                alert('tudo bom?')
                const response = await api.put('alterandoImg', { "userId": `${userId}`, "imagePath": `${avatarList.girl.imagePath}` })
                Cookies.set('imagePath', String(avatarList.girl.imagePath))
            } else if (choice == avatarList.fitness.title) {
                alert('tudo bom?')
                const response = await api.put('alterandoImg', { "userId": `${userId}`, "imagePath": `${avatarList.fitness.imagePath}` })
                Cookies.set('imagePath', String(avatarList.fitness.imagePath))
            } else if (choice == avatarList.user.title) {
                alert('tudo bom?')
                const response = await api.put('alterandoImg', { "userId": `${userId}`, "imagePath": `${avatarList.user.imagePath}` })
                Cookies.set('imagePath', String(avatarList.user.imagePath))
            }
            //console.log('????')

            //Cookies.set('imagePath', String(avatarList.girl.imagePath))
            //console.log('q?')
            //const response = await api.put('alterandoImg', { "userId": 3, "imagePath": "girl.svg" })//{ "userId": `${userId}`, "name": `${name}` })
            //console.log('ok até aqui')
            //const data = response.data as responseData;
            //console.log('tudo ok')

        } catch (err) {
            console.log('deu erro')
        }

        router.reload();
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div>
                    <button onClick={() => fecharModal()}>
                        <img src="icons/close.svg" alt="" style={{ height: '100%', width: '100%' }} />
                    </button>
                </div>
                <div>
                    <strong> Escolha seu Avatar</strong>
                    <div>
                        <button className={styles.button} onClick={e => { alterandoAvatar(avatarList.man.title) }}>
                            <img style={iconsClass} src={`icons/man.svg`} alt={`icons-image`} />
                        </button>

                        <button className={styles.button} onClick={e => { alterandoAvatar(avatarList.oldMan.title) }}>
                            <img style={iconsClass} src={`icons/old-man.svg`} alt={`icons-image`} />
                        </button>

                        <button className={styles.button} onClick={e => { alterandoAvatar(avatarList.user.title) }}>
                            <img style={iconsClass} src={`icons/user.svg`} alt={`icons-image`} />
                        </button>

                        <button className={styles.button} onClick={e => { alterandoAvatar(avatarList.girl.title) }}>
                            <img style={iconsClass} src={`icons/girl.svg`} alt={`icons-image`} />
                        </button>

                        <button className={styles.button} onClick={e => { alterandoAvatar(avatarList.fitness.title) }}>
                            <img style={iconsClass} src={`icons/fitness.svg`} alt={`icons-image`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

//<img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={`http://localhost:3001/files/profile-user.svg`} alt={`icons-image`} />