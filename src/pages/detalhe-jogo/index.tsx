import Footer from '../components/Footer/footer';
import Header from '../components/header/header';
import styles from './detalhe-jogo.module.css';

const detalheJogo = () => {
    return(
        <>
            <Header></Header>
            <main className={styles.principal}>
                    <div className={styles.content}>
                    <h2>Detalhe do Jogo</h2>
                    
                        <div className={styles.info}>
                            <div className={styles.imagem}>
                                <img src="/imgs/lol2.png" alt="Imagem do Jogo" />
                            </div>

                            <div className={styles.descricao}> 
                                <h3>League of Legends</h3>
                                <p>League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.</p>
                                <p>O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.</p>
                            </div>
                        </div>

                        <div className={styles.detalhes}>
                            <div className={styles.detalhesLeft}>
                            <p>Classificação Indicativa: <span>18 anos</span></p>
                            <p>Preço: <span>R$ 0,00</span></p>
                            <p>Plataformas: <span>PC</span></p>
                            </div>
                            <div className={styles.detalhesRight}>
                                <div> <p>Categorias:</p> 
                                    <ul>
                                        <li>Ação</li>
                                        <li>Competitivo</li>
                                    </ul>
                                    </div>
                                <div> <p>Generos:</p>
                                    <ul>
                                        <li>Strategy</li>
                                        <li>MOBA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default detalheJogo;