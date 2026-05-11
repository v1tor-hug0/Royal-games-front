import Header from "@/pages/components/header/header";
import styles from "./home.module.css"

const Home = () => {

    return (
    <>

        <Header></Header>
        <main className={styles.principal}>
            <div className={styles.container}>
                <div className={styles.infoLeft}>
                    <h3>Conheça nossos jogos!</h3>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                </div>
                <div className={styles.infoRight}>
                    <img src="/imgs/Imagem%20Banner.png" alt="Imagem de um ciborgue"/>
                </div>
            </div>
        </main>
    </>

    )
}
export default Home