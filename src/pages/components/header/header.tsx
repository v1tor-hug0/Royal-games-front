import styles from "./header.module.css"

const Header = () => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <img src="/imgs/Logo%20Header.png" alt="Logo Royal Games"/>
                    <nav className={styles.nav_menu}>
                        <a href="#" className={styles.btn_login}>Login</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header