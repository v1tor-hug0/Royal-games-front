import styles from "./login.module.css"
import Link from "next/link";
import { useState } from "react";
import { login } from "../api/authService";
import {useRouter} from "next/router";
import {toast, ToastContainer} from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    const router = useRouter();

    async function Autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const response = await login(email, senha);
            notificacao("Login realizado com sucesso!");
            setTimeout(() => {

                router.push("/home");
            }, 1500)
        } catch{
            erro("Email ou senha invalidos");
        }
    }


    return(
        <>
            <ToastContainer></ToastContainer>
            <main className={styles.principal}>
                <div className={styles.content}>
                    <img src="/imgs/imagem%20Login.png" alt="Imagem de um ciborgue"/>
                    <form action="" className={styles.areaLogin} onSubmit={Autenticar}>
                        <Link href="/home "><img src="/imgs/Vector.png" alt="Logo Royal Games"/></Link>

                        <div className={styles.inputs}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="email@example.com" name="email" required
                                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" placeholder="*******" name="senha" required
                                       value={senha} onChange={(e) => setSenha(e.target.value)}/>
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