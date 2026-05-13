import Header from "@/pages/components/header/header";
import styles from "./home.module.css"
import ListaCatalogo from "@/pages/components/lista-catalogo/lista-catalogo";
import Footer from "@/pages/components/Footer/footer";

const Home = () => {

    return (
    <>

        <Header></Header>
        <main className={styles.principal}>
            <section className={styles.banner}>
                <div className={styles.infoLeft}>
                    <h3>Conheça nossos jogos!</h3>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                </div>
                <div className={styles.infoRight}>
                    <img src="/imgs/Imagem%20Banner.png" alt="Imagem de um ciborgue"/>
                </div>
            </section>

            <section className={styles.catalogo}>
                <div></div>
                <h3>Catálogo de jogos</h3>
                <ListaCatalogo></ListaCatalogo>

            </section>

            <section className={styles.comportamento}>
                <h3>Jogos online podem afetar o comportamento humano?</h3>
                <div className={styles.imagens}>
                    <img src="/imgs/lol.png" alt=""/>
                    <img src="/imgs/cs.png" alt=""/>
                </div>
                <p> Estudos indicam que jogos podem alterar o comportamento humano… <br/> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
            </section>
            <Footer></Footer>
        </main>
    </>

    )
}
export default Home;