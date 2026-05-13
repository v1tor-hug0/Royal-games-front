import styles from "./login.module.css"
import Link from "next/link";

const Login = () => {
    return(
        <>
            <main className={styles.principal}>
                <div className={styles.content}>
                    <img src="/imgs/imagem%20Login.png" alt="Imagem de um ciborgue"/>
                    <form action="" className={styles.areaLogin}>
                        <Link href="/home "><img src="/imgs/Vector.png" alt="Logo Royal Games"/></Link>

                        <div className={styles.inputs}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="email@example.com" name="email"/>
                            </div>

                            <div>
                                <label htmlFor="password">Senha</label>
                                <input type="password" placeholder="*******" name="password"/>
                            </div>
                        </div>

                        <button type="submit" className={styles.btn_entrar}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login