import { GetStaticProps } from 'next'
import React, { useContext } from 'react'
import { SideBar } from '../components/Sidebar'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { ProfileContext, ProfileProvider } from '../contexts/ProfileContext'
import api from './api/api'
import styles from '../styles/pages/LeaderBoard.module.css'

interface LeaderBoardUsers {
    name: string;
    level: number;
    currentExperience: number;
    completedChallenges: number;
    imagePath: string;
}

interface LeaderBoardProps {
    LeaderBoard: LeaderBoardUsers[];
}

export default function LeaderBoard({ LeaderBoard }: LeaderBoardProps) {
    return (
        <div className={styles.container}>
            <SideBar page={'leaderboard'} />
            <div className={styles.leaderBoard}>
                <body>
                    <header>
                        <h1>Leaderboard</h1>
                    </header>
                    <div>
                        <header>
                            <div>
                                <strong style={{ marginRight: '1rem' }}>POSIÇÃO</strong>
                                <strong style={{ marginRight: '4rem' }}>USUÁRIO</strong>
                            </div>
                            <div style={{ marginLeft: '3rem' }}>
                                <strong style={{ marginRight: '2rem' }}>DESAFIOS</strong>
                                <strong>EXPERIÊNCIA</strong>
                            </div>
                        </header>
                        {LeaderBoard.map((user, index) => (
                            <div>
                                <div>
                                    <div className={styles.userContainer}>
                                        <div className={styles.position}> {index + 1}</div>
                                        <div className={styles.usersData}>
                                            <div className={styles.imagem} >
                                                <img src={`https://pomodorotonextlevel.herokuapp.com/files/${user.imagePath}`} style={{ height: '4rem', width: '4rem' }} alt="user image" />
                                            </div>
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
                </body>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await api.get('users');
    const LeaderBoard = response.data;

    return {
        props: {
            LeaderBoard,
        },
        revalidate: 10,
    }
}
