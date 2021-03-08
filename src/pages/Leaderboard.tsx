import { GetServerSideProps } from 'next'
import React, { useContext } from 'react'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { ProfileContext, ProfileProvider } from '../contexts/ProfileContext'
import styles from '../styles/pages/LeaderBoard.module.css'

function UserInfo() {

    const { nomeProfile } = useContext(ProfileContext)
    const { currentExperience, level, challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.userContainer}>
            <div className={styles.position}> 1</div>
            <div className={styles.usersData}>
                <div className={styles.imagem}>
                    <img src="https://github.com/gMateus.png" alt="" />
                </div>
                <div className={styles.NomeAndLevel}>
                    <strong>
                        {nomeProfile}
                    </strong>

                    <p>{level}</p>
                </div>

                <div className={styles.info}>
                    <div>
                        <p>{challengesCompleted}</p>
                        <p>completados</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>{currentExperience}</p>
                        <p>xp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LeaderBoard(props) {
    return (
        <ProfileProvider
            nomeProfile={props.nomeProfile}
            isUserAlreadySetName={props.isUserAlreadySetName}
            isGetNameModalOpen={props.isGetNameModalOpen}
        >
            <ChallengesProvider
                level={props.level}
                currentExperience={props.currentExperience}
                challengesCompleted={props.challengesCompleted}

            >
                <div style={{ display: 'flex' }}>
                    <div
                        style={{
                            height: '100vh', width: '6rem',
                            background: 'var(--white)', display: 'flex', flexDirection: 'column',
                            justifyContent: 'space-between', alignItems: 'center'

                        }}>
                        <img src="icons/Logo.svg" alt="" style={{ margin: '1rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', height: '55%', width: '3rem' }}>
                            <a href="http://localhost:3000/" style={{ marginBottom: '1rem' }}>
                                <img src="icons/Home.svg" alt="" />
                            </a>
                            <a href="http://localhost:3000/Leaderboard">
                                <img src="icons/award.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.container}>

                        <body>
                            <header>
                                <h1>Leaderboard</h1>
                            </header>
                            <main>
                                <header>
                                    <div>
                                        <strong>POSIÇÃO</strong>
                                        <strong>USUÁRIO</strong>
                                    </div>
                                    <div>
                                        <strong>DESAFIOS</strong>
                                        <strong>EXPERIÊNCIA</strong>
                                    </div>
                                </header>
                                <main>
                                    <div>
                                        <UserInfo />
                                        <UserInfo />
                                        <UserInfo />
                                    </div>
                                </main>
                            </main>
                        </body>
                    </div>
                </div>
            </ChallengesProvider>
        </ProfileProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience,
        challengesCompleted, nomeProfile,
        isUserAlreadySetName, isGetNameModalOpen, currentTheme } = ctx.req.cookies

    console.log(nomeProfile)
    console.log(level)
    console.log(currentExperience)
    console.log(challengesCompleted)
    return {
        props: {
            level: Number(level ?? 1),
            currentExperience: Number(currentExperience ?? 0),
            challengesCompleted: Number(challengesCompleted ?? 0),
            nomeProfile: String(nomeProfile ?? 'Digite um nome'),
        }
    }
}
