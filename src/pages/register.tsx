import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useCallback } from "react";
import { ProfileContext, ProfileProvider } from "../contexts/ProfileContext";
import api from "./api/api";

import FormData from 'form-data';

import styles from '../styles/pages/register.module.css'


interface responseData {
    completedChallenges: number;
    currentExperience: number;
    level: number;
    id: number;
    name: string;
    imagePath: string;
}

export default function Register() {

    const formRef = useRef(null);

    const router = useRouter();

    useEffect(() => {
        const checkUserLoggedIn = Cookies.get('userId');

        if (checkUserLoggedIn) {
            router.push('/')
        }
    }, [])

    const handleRegister = useCallback(async () => {
        if (!formRef.current[0].value || !formRef.current[1].value || !formRef.current[2].files[0]) {
            return;
        }

        const formData = new FormData(formRef.current);

        try {

            //console.log(formRef.current[2].files[0])
            //{ "name": `${formRef.current[0].value}`, "password": `${formRef.current[1].value}`, "image": `${formRef.current[2].files[0]}` }

            const response = await api.post('users', formData)
            //alert('dados salvos nos cookies com sucesso')



            const data = response.data as responseData;
            console.log(data.id)

            Cookies.set('level', String(data.level));
            Cookies.set('currentExperience', String(data.currentExperience));
            Cookies.set('completedChallenges', String(data.completedChallenges));
            Cookies.set('userId', String(data.id));
            Cookies.set('name', String(data.name));
            Cookies.set('imagePath', data.imagePath);

            router.push('/');

        } catch (error) {
            return alert('Tem algo errado')
        }
    }, [formRef]);


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
                <p style={{ margin: '10px 0' }}>Preencha o formulário para criar a conta.</p>
                <div style={{
                    margin: '10px 0',
                    width: '20rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <form ref={formRef}>
                        <input type="text" name="name" placeholder="Nome de usuário"
                            className={styles.input} style={{ width: '20rem' }} />
                        <input type="text" name="password" placeholder="senha"
                            className={styles.input} style={{ width: '20rem' }} />
                        <div className={styles.imageInput}>
                            <label htmlFor="images">Selecionar imagem de perfil</label>
                            <input type="file" name="image" id="images" />
                        </div>
                        <button id='name-a' type="button"
                            onClick={handleRegister}
                            style={{
                                height: '3rem',
                                width: '20rem',
                                border: '0 none',
                                borderRadius: '5px',
                                background: 'var(--green)',

                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <p style={{ color: 'var(--white)' }}>Criar conta</p>
                        </button>
                    </form>
                </div>
                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', width: '20rem' }}>
                    <Link href="/login">
                        <a>Voltar pro login</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}