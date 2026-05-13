import styles from "./header.module.css"
import Link from "next/link";

const Header = () => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <img src="/imgs/Logo%20Header.png" alt="Logo Royal Games"/>
                    <nav className={styles.nav_menu}>
                        <Link href="/login" className={styles.btn_login}>Login</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header