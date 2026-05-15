import Link from "next/link";
import styles from "./card-jogos.module.css"
import {formatarPreco} from "@/utils/formatar";

type Jogo = {
    jogoID: number;
    nome: string;
    preco: number;
    imagemUrl: string;
}



const CardJogos = ({jogoID, nome, preco, imagemUrl} : Jogo ) => {
    return(
        <>
            <div className={styles.container}>
                <Link href={"/detalhe-jogo/" + jogoID} className={styles.link_imagem}> <img src={imagemUrl} alt="Imagem do jogo"/></Link>
                
                <div className={styles.textos}>
                    <h6>{nome}</h6>
                    <p>{formatarPreco(preco)}</p>
                    <Link href={"/detalhe-jogo/" + jogoID} className={styles.link}>Detalhes</Link>
                </div>
            </div>
        </>
    )
};
export default CardJogos;