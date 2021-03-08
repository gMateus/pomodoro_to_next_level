import { GetServerSideProps } from "next";
import React, { useContext } from "react";
import { ProfileContext, ProfileProvider } from "../contexts/ProfileContext";


export function Create_2() {

    const { nomeProfile, } = useContext(ProfileContext)
    const { alterandoNome, confirmeThanUserAlreadySetName } = useContext(ProfileContext)

    function mudandoNomeUsuario() {
        const inputNameValor = (document.getElementById('input-name') as HTMLInputElement).value

        if (inputNameValor.length > 0 && inputNameValor.length < 18) {
            console.log(inputNameValor)
            alterandoNome(inputNameValor)
            confirmeThanUserAlreadySetName()
        } else {
            alert('O campo está vazio, tente de novo.')
        }
    }

    return (
        <div className='container'
            style={{
                background: 'var(--blue)',
                width: '100vw',
                height: '100vh',
                display: 'flex'
            }}>
            <div style={{
                height: '100vh',
                width: '50vw',
                display: 'flex',
                alignItems: 'center'
            }}>
                <img src="icons/Simbolo.svg" alt="" />
            </div>
            <div style={{
                height: '100vh',
                width: '50vw',
                color: 'white'
            }}>
                <div style={{
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '3rem'
                }}>
                    oi
                    </div>
                <div style={{
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '3rem'
                    , color: '#B2B9FF'
                }}>
                    <strong style={{ margin: '10px 0' }}>Bem-vindo</strong>
                    <p style={{ margin: '10px 0' }}>Faça login para começar</p>
                    <div style={{ margin: '10px 0', display: 'flex' }}>
                        <input type="text" name="" id="input-name"
                            style={{
                                height: '3rem',
                                border: '0 none',
                                borderRadius: '5px'
                            }} />
                        <a
                            id='name-a'
                            onClick={mudandoNomeUsuario}
                            href="http://localhost:3000/Home"
                            style={{
                                height: '3rem',
                                width: '3rem',
                                border: '0 none',
                                borderRadius: '5px',
                                background: 'var(--blue-dark)'
                            }}></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Create(props) {
    return (

        <ProfileProvider
            nomeProfile={props.nomeProfile}
            isUserAlreadySetName={props.isUserAlreadySetName}
            isGetNameModalOpen={props.isGetNameModalOpen}
        >
            <Create_2 />
        </ProfileProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience,
        challengesCompleted, nomeProfile,
        isUserAlreadySetName, isGetNameModalOpen, currentTheme } = ctx.req.cookies
    /*
      console.log(nomeProfile)
      console.log('user ja colocou nome: ' + isUserAlreadySetName)
      console.log('abrir modal:' + isGetNameModalOpen)
      console.log(level)
      console.log(currentExperience)
      console.log(challengesCompleted)
      console.log('currenttheme is ' + currentTheme)*/
    return {
        props: {
            level: Number(level ?? 1),
            currentExperience: Number(currentExperience ?? 0),
            challengesCompleted: Number(challengesCompleted ?? 0),
            nomeProfile: String(nomeProfile ?? 'Digite um nome'),
            isUserAlreadySetName: Boolean(isUserAlreadySetName ?? false),
            isGetNameModalOpen: Boolean(isGetNameModalOpen ?? true),
            currentTheme: String(currentTheme ?? 'defaultTheme')
        }
    }
}