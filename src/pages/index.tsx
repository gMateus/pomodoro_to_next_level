import { CompleteChallenges } from "../components/CompleteChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profiles';
import { CountingDown } from '../components/CountingDown';

import styles from '../styles/pages/Home.module.css';

import Head from 'next/head'
import { Challengesbox } from "../components/Challengesbox";

import { GetServerSideProps } from 'next'
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";




interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {


  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}

    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <header className={styles.logoContainer}>
          <div></div>
          <img className={styles.logo} src="icons/Group_1_white.svg" alt="" />
          <div></div>

        </header>

        <CountDownProvider>
          <section>
            <div>
              <ExperienceBar />
              <Profile />
              <CompleteChallenges />
              <CountingDown />
            </div>

            <div>
              <Challengesbox />
            </div>
          </section>
          <footer>
            <a href="https://github.com/gMateus/pomodoro_to_next_level" > Meu Github!</a>
          </footer>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
