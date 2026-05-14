import Link from "next/link";
import styles from "./card-jogos.module.css"

const CardJogos = () => {
    return(
        <>
            <div className={styles.container}>
                <Link href="/detalhe-jogo" > <img src="/imgs/minecraft.png" alt=""/></Link>
                
                <div className={styles.textos}>
                    <h6>Minecraft</h6>
                    <p>R$70,00</p>
                    <button>Detalhes</button>
                </div>
            </div>
        </>
    )
};
export default CardJogos;