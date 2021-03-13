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
import React, { useContext, useEffect } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { ProfileProvider } from "../contexts/ProfileContext";
import { ConfigModalProvider } from "../contexts/ConfigModal";
import { SideBar } from "../components/Sidebar";
import Cookies from "js-cookie";
import router from "next/router";

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  nomeProfile: string;
  isUserAlreadySetName: boolean;
  isGetNameModalOpen: boolean;
  currentTheme: string;
}


export default function Home(props: HomeProps) {

  useEffect(() => {
    const checkUserLoggedIn = Cookies.get('userId');

    if (!checkUserLoggedIn) {
      router.push('/login');
    }
  }, []);

  return (
    //<ThemeProvider
    //  currentTheme={props.currentTheme}
    //>
    <ProfileProvider
      isUserAlreadySetName={props.isUserAlreadySetName}
      nomeProfile={props.nomeProfile}
      isGetNameModalOpen={props.isGetNameModalOpen}
    >
      <ConfigModalProvider>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          completedChallenges={props.completedChallenges}
        >
          <div className={styles.container} style={{ display: 'flex' }}>
            <SideBar page={"dashboard"} />
            <div className={styles.challengesContainer} style={{ /*background: backgroundTheme,*/ marginLeft: '10px' }}>
              <div>
                <Head>
                  <title>Início | move.it</title>
                </Head>

                <header className={styles.logoContainer}>
                  <div className={styles.vazio}></div>

                  <div className={styles.titleHeader} //style={{ color: colorNameProfile }}
                  >Pomodoro to next level</div>

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
                    <a href="https://github.com/gMateus/pomodoro_to_next_level" /* style={{ color: colorNameProfile }} */> Meu Github!</a>
                  </footer>
                </CountDownProvider>
              </div>
            </div>
          </div>
        </ChallengesProvider>
      </ConfigModalProvider>
    </ProfileProvider>
    ///ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience,
    completedChallenges, name,
    //isUserAlreadySetName, isGetNameModalOpen, currentTheme 
  } = ctx.req.cookies

  console.log("name: " + name)
  //console.log('user ja colocou nome: ' + isUserAlreadySetName)
  //console.log('abrir modal:' + isGetNameModalOpen)
  console.log("level: " + level)
  console.log("currentExperience: " + currentExperience)
  console.log("completedChallenges: " + completedChallenges)
  //console.log('currenttheme is ' + currentTheme)
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      completedChallenges: Number(completedChallenges ?? 0),
      name: String(name ?? 'Digite um nome'),
      //isUserAlreadySetName: Boolean(isUserAlreadySetName ?? false),
      //isGetNameModalOpen: Boolean(isGetNameModalOpen ?? true),
      //currentTheme: String(currentTheme ?? 'defaultTheme')
    }
  }
}
