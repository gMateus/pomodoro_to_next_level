import { GetServerSideProps, GetStaticProps } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { SideBar } from '../components/Sidebar'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { ProfileContext, ProfileProvider } from '../contexts/ProfileContext'
import api from './api/api'
import styles from '../styles/pages/LeaderBoard.module.css'
import { ConfigModalProvider } from '../contexts/ConfigModal'
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext'
import Cookies from 'js-cookie'
import router, { useRouter } from 'next/router'

interface LeaderBoardUsers {
    name: string;
    level: number;
    currentExperience: number;
    completedChallenges: number;
    imagePath: string;
    CreatedAt: string;
}

interface LeaderBoardProps {
    LeaderBoard: LeaderBoardUsers[];
}

export default function LeaderBoard({ LeaderBoard }: LeaderBoardProps) {

    const teste = LeaderBoard.map((user) => {
        let testando2 = false;
        const createdAt = `${user.CreatedAt}`

        const getMonthCreatedAt = Number(createdAt.substring(5, 7))
        const getYearCreatedAt = Number(createdAt.substring(0, 4))

        //console.log(`${user.name} -- ${user.CreatedAt}`)
        //console.log("month: " + getMonthCreatedAt)
        //console.log("year: " + getYearCreatedAt)

        if (getMonthCreatedAt == 3 && getYearCreatedAt == 2021) {
            //console.log("tem borda especial? " + true)
            //console.log("**********************")
            testando2 = true

        } else {
            //console.log("tem borda especial? " + false)
            //console.log("**********************")
            testando2 = false

        }

        console.log(testando2)

        console.log(getMonthCreatedAt, ' ',
            getYearCreatedAt)

        return testando2
    })


    const { backgroundTheme, colorNameProfile } = useContext(ThemeContext)
    //console.log('background is ' + String(backgroundTheme))

    return (

        <ConfigModalProvider>
            <div className={styles.container} style={{ background: `${backgroundTheme}` }}>
                <SideBar page={'leaderboard'} />
                <div className={styles.leaderBoard}>
                    <div>
                        <header>
                            <h1 style={{ color: `${colorNameProfile}` }}>Leaderboard</h1>
                        </header>
                        <div>
                            <header>
                                <div>
                                    <strong style={{ marginRight: '1rem', color: `${colorNameProfile}` }}>POSIÇÃO</strong>
                                    <strong style={{ marginRight: '4rem', color: `${colorNameProfile}` }}>USUÁRIO</strong>
                                </div>
                                <div style={{ marginLeft: '3rem' }}>
                                    <strong style={{ marginRight: '2rem', color: `${colorNameProfile}` }}>DESAFIOS</strong>
                                    <strong style={{ color: `${colorNameProfile}` }}>EXPERIÊNCIA</strong>
                                </div>
                            </header>
                            {LeaderBoard.map((user, index) => (

                                <div>
                                    <div>
                                        <div className={styles.userContainer}>
                                            <div className={styles.position}> {index + 1}</div>
                                            <div className={styles.usersData}>



                                                {teste[index] ? (
                                                    <div className={styles.imagem} >
                                                        <img src={`https://pomodorotonextlevel.herokuapp.com/files/${user.imagePath}`} style={{ height: '4rem', width: '4rem', border: '1px solid red' }} alt="user image" />
                                                    </div>
                                                ) : (
                                                    <div className={styles.imagem} >
                                                        <img src={`https://pomodorotonextlevel.herokuapp.com/files/${user.imagePath}`} style={{ height: '4rem', width: '4rem' }} alt="user image" />
                                                    </div>
                                                )}

                                                <div className={styles.NomeAndLevel}>
                                                    <strong>
                                                        {user.name}
                                                    </strong>

                                                    <p>level {user.level}</p>

                                                </div>

                                                <div className={styles.info}>
                                                    <div>
                                                        <p>{user.completedChallenges}</p>
                                                        <p>completados</p>
                                                    </div>
                                                </div>
                                                <div className={styles.info}>
                                                    <div>
                                                        <p>{user.currentExperience}</p>
                                                        <p>xp</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ConfigModalProvider >

    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await api.get('users');
    const LeaderBoard = response.data;

    return {
        props: {
            LeaderBoard,
        },
        revalidate: 2,
    }
}
