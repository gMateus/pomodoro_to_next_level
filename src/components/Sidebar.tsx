import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/components/SideBar.module.css'

interface SideBarProps {
    page: 'dashboard' | 'leaderboard';
}

export function SideBar({ page }: SideBarProps) {

    const router = useRouter();

    function handleLogout() {
        Cookies.remove('completedChallenges');
        Cookies.remove('level');
        Cookies.remove('name');
        Cookies.remove('currentExperience');
        Cookies.remove('userId');

        router.push('/login');
    }

    return (
        <div className={styles.container}>
            <img src="icons/Logo.svg" alt="" />
            <div className={styles.options}>
                <button className={styles.button} disabled={page === 'dashboard'}>
                    <Link href="/" replace>
                        <a>
                            {
                                page === 'dashboard' ? <img src="icons/home.svg" alt="home" /> : <img src="icons/disableHome.svg" alt="" />

                            }
                        </a>
                    </Link>
                </button>

                <button className={styles.button} disabled={page === 'leaderboard'}>
                    <Link href="/leaderboard" replace>
                        <a>
                            {
                                page === 'leaderboard' ? <img src="icons/award.svg" alt="award" /> : <img src="icons/disableAward.svg" alt="award" />

                            }
                        </a>
                    </Link>
                </button>
            </div>
            <button onClick={handleLogout} style={{ marginBottom: '2rem', background: 'none', border: 'none' }}>
                <img src="/icons/logout.svg" alt="logout" style={{ height: '1.5rem', width: '1.5rem' }} />
            </button>
        </div>
    )
}