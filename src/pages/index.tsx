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
import { ChangeTheme } from "../components/ChangeTheme";
import React, { ReactNode, useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { ProfileProvider } from "../contexts/ProfileContext";
import { ConfigModalProvider } from "../contexts/ConfigModal";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  nomeProfile: string;
  isUserAlreadySetName: boolean;
  isGetNameModalOpen: boolean;
  currentTheme: string;
}

interface ViewProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  nomeProfile: string;
  isUserAlreadySetName: boolean;
  isGetNameModalOpen: boolean;
}


export function View(props: ViewProps) {

  const { backgroundTheme, colorNameProfile } = useContext(ThemeContext)

  return (
    <ConfigModalProvider>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}

      >
        <div className={styles.container} style={{ background: backgroundTheme }}>
          <div>
            <Head>
              <title>Início | move.it</title>
            </Head>

            <header className={styles.logoContainer}>
              <div className={styles.vazio}></div>

              <div className={styles.titleHeader} style={{ color: colorNameProfile }}>Pomodoro to next level</div>

              <div className={styles.themeContainer}><ChangeTheme /></div>
            </header>

            <CountDownProvider>
              <ProfileProvider
                isUserAlreadySetName={props.isUserAlreadySetName}
                nomeProfile={props.nomeProfile}
                isGetNameModalOpen={props.isGetNameModalOpen}
              >
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
                  <a href="https://github.com/gMateus/pomodoro_to_next_level" style={{ color: colorNameProfile }} > Meu Github!</a>
                </footer>
              </ProfileProvider>
            </CountDownProvider>
          </div>
        </div>
      </ChallengesProvider>
    </ConfigModalProvider>
  )
}


export default function Home(props: HomeProps) {
  return (

    <ThemeProvider currentTheme={props.currentTheme}>
      <View level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        nomeProfile={props.nomeProfile}
        isUserAlreadySetName={props.isUserAlreadySetName}
        isGetNameModalOpen={props.isGetNameModalOpen}
      />
    </ThemeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience,
    challengesCompleted, nomeProfile,
    isUserAlreadySetName, isGetNameModalOpen, currentTheme } = ctx.req.cookies

  console.log(nomeProfile)
  console.log('user ja colocou nome: ' + isUserAlreadySetName)
  console.log('abrir modal:' + isGetNameModalOpen)
  console.log(level)
  console.log(currentExperience)
  console.log(challengesCompleted)
  console.log('currenttheme is ' + currentTheme)
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
