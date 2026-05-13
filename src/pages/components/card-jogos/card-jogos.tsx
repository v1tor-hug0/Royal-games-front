import styles from "./card-jogos.module.css"

const CardJogos = () => {
    return(
        <>
            <div className={styles.container}>
                <img src="/imgs/minecraft.png" alt=""/>
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