import styles from "./lista_catalogo.module.css"
import CardJogos from "@/pages/components/card-jogos/card-jogos";

const ListaCatalogo = () => {
    return(
        <>
        <main className={styles.principal}>
            <div className={styles.content}>
            <div className={styles.filtros}>
                <input type="text" className={styles.input_pesquisa} placeholder="Pesquisar"/>
                <select name="filtrar" id="filtrar" className={styles.filtrar}>
                    <option value="menor">Menor Preço</option>
                    <option value="Maior">Maior Preço</option>
                </select>
                <select name="categoria" id="categoria" className={styles.categorias}>
                    <option value="teste">teste</option>
                </select>
            </div>
            <div className={styles.catalogo}>
                <CardJogos></CardJogos>
                <CardJogos></CardJogos>
                <CardJogos></CardJogos>
                <CardJogos></CardJogos>
                <CardJogos></CardJogos>
                <CardJogos></CardJogos>
            </div>

                <div className={styles.paginacao}>
                    <ul className={styles.lista}>
                        <li className={styles.setaEsquerda}><img src="/imgs/seta.png" alt=""/></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><img src="/imgs/seta.png" alt=""/></li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
};
export default ListaCatalogo;