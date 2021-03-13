import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";

import styles from '../styles/pages/login.module.css'

import api from './api/api'

interface responseData {
    completedChallenges: number;
    currentExperience: number;
    level: number;
    id: number;
    name: string;
}

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isModalActive, setIsModalActive] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const checkUserLoggedIn = Cookies.get('userId')

        if (checkUserLoggedIn) {
            router.push('/');
        }
    }, []);

    const handleLogin = useCallback(async () => {
        if (!name || !password) {
            return;
        }

        try {
            console.log(name)
            console.log(password)
            const response = await api.post('users/login', { "name": `${name}`, "password": `${password}` });
            const data = response.data as responseData;

            Cookies.set('userId', String(data.id));
            Cookies.set('name', data.name);
            Cookies.set('completedChallenges', String(data.completedChallenges));
            Cookies.set('level', String(data.level));
            Cookies.set('currentExperience', String(data.currentExperience));

        } catch (error) {
            return alert('Alguma coisa deu errada.');
        }

        router.push('/');
    }, [name, password])

    return (
        <div className={styles.container}>
            <img src="icons/Simbolo.svg" alt="" />
            <div>
                <strong
                    style={{
                        margin: '10px 0'
                    }}>
                    Bem-vindo
                    </strong>
                <p style={{ margin: '10px 0' }}>Faça login para começar</p>
                <div style={{
                    margin: '10px 0',
                    width: '20rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <input type="text" name="" id="input-name" placeholder="Nome de usuário" value={name}
                        onChange={event => setName(event.target.value)}
                        className={styles.input} />
                    <input type="text" name="" id="input-password" placeholder="senha" value={password}
                        onChange={event => setPassword(event.target.value)}
                        className={styles.input} />
                    <button style={{
                        height: '3rem',
                        background: 'var(--green)',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'var(--white)',
                    }} onClick={handleLogin}>
                        <p style={{ position: 'absolute' }}>Entrar</p>
                        <img src="icons/Vector.svg" alt="" style={{ marginLeft: '15rem', height: '1rem' }} />
                    </button>
                </div>
                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', width: '20rem' }}>
                    <Link href="/register">
                        <a>Criar conta</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
