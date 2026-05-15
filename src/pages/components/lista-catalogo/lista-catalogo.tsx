import styles from "./lista_catalogo.module.css"
import CardJogos from "@/pages/components/card-jogos/card-jogos";
import Link from "next/link";
import {useEffect, useState} from "react";
import {listarJogos} from "@/pages/api/jogoService";

interface Jogo {
    jogoID: number;
    nome: string;
    preco: number;
    genero: string;
    classificacao: string;
    plataforma: string;
    imagemUrl: string;
    descricao: string;
}

const ListaCatalogo = () => {

    const [jogos, setJogos] = useState<Jogo[]>([]);
    const[ordem, setOrdem] = useState("todos");
    const[pesquisa, setPesquisa] = useState("");


    async function listar(){
        try {
            const lista = await listarJogos();
            setJogos(lista);
            console.log(lista);
        }
        catch (error: any){
            console.log(error.message);
        }
    }


    useEffect(() => {
        listar();
    }, [])


    const jogosFiltrados = jogos.filter((jogo) => jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()))

        .sort((a, b) => {
            if(ordem === "menor") {
                //Se o preco da esquerda é maior do que o preco da direita
                return a.preco - b.preco
            } else if(ordem === "maior" ) {
                return b.preco - a.preco
            } else {
                return a.jogoID - b.jogoID;
            }
        })


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
                <Link href="/cadastrar" className={styles.link}>Adicionar jogo</Link>
            </div>
            <div className={styles.catalogo}>

                {jogosFiltrados.length > 0 ? jogosFiltrados.map((item) => (
                    <CardJogos
                        jogoID={item.jogoID}
                        nome={item.nome}
                        preco={item.preco}
                        imagemUrl={item.imagemUrl}
                        key={item.jogoID}
                    ></CardJogos>
                )) : (
                    <p>Carregando produtos...</p>
                )
                }

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