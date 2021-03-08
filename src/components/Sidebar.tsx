export function SideBar() {
    return (
        <div
            style={{
                height: '100vh', width: '6rem',
                background: 'var(--white)', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', alignItems: 'center'

            }}>
            <img src="icons/Logo.svg" alt="" />
            <div style={{ display: 'flex', flexDirection: 'column', height: '55%', width: '3rem' }}>
                <a href="http://localhost:3000/Home" style={{ marginBottom: '1rem' }}>
                    <img src="icons/Home_(1).svg" alt="" />
                </a>
                <a href="http://localhost:3000/Leaderboard">
                    <img src="icons/award_(1).svg" alt="" />
                </a>
            </div>
        </div>
    )
}