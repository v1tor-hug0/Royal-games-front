import Footer from "../components/Footer/footer";
import Header from "../components/header/header";
import ListaCatalogo from "../components/lista-catalogo/lista-catalogo";
import styles from "./cadastrar.module.css"
import React, {useState} from "react";
import {useRouter} from "next/router";
import {listarGenero} from "@/pages/api/generoService";

interface Genero{
    generoID: number;
    nome: string;
}

const Cadastrar = () => {

    const [genero, setGenero] = useState<Genero[]>([]);
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<number>(0);
    const [imagem, setImagem] = useState<File | null>(null);
    const [generoSelecionado, setGeneroSelecionado] = useState<number[]>([]);


    const router = useRouter();
    const id = router.query.id;

    async function listarGeneroEmAdicionar(id: number) {
        const lista = await listarGenero()
        console.log(lista)
        setGenero(lista.data)
    }


    async function Cadastrar(e: React.FormEvent) {
        e.preventDefault();
        try{
            const dados  ={
                nome,
                descricao,
                preco,
                imagem,
                generoID: generoSelecionado
            }
        await
        }
        catch(error: any){
            error.message
        }

    }


    return (
        <>
            <Header></Header>
            <main className={styles.principal}>
                <form action="" className={styles.formulario} onSubmit={Cadastrar}>
                    <div className={styles.content}>
                    <h1>Cadastrar novo jogo</h1>
                    <div className={styles.inputs}>

                            <div className={styles.cima}>
                                <label htmlFor="nome" >Nome</label>
                                <input type="text" name="nome" id="nome"/>
                            </div>


                            <div className={styles.meio}>
                                <div>
                                    <label htmlFor="valor">Valor</label>
                                    <input type="number" name="valor" id="valor"/>
                                </div>

                                <div>
                                    <label htmlFor="genero">Gênero</label>
                                    <select name="genero" id="genero">
                                        <option value="teste">teste</option>
                                    </select>
                                </div>

                                <div className={styles.classificacao}>
                                    <label htmlFor="classificacao">Classificação Indicativa</label>
                                    <select name="classificacao" id="classificacao">
                                        <option value="teste">teste</option>
                                    </select>
                                </div>

                            </div>

                            <div className={styles.baixo}>
                                <div>
                                    <label htmlFor="plataforma">Plataforma</label>
                                    <select name="plataforma" id="plataforma">
                                        <option value="teste">teste</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="imagem">Imagem</label>
                                    <input type="file" name="imagem" id="imagem"/>
                                </div>

                            </div>
                            <div className={styles.descricao}>
                                <label htmlFor="descricao">Descricao</label>
                                <textarea name="descricao" id="descricao"></textarea>
                            </div>




                    </div>
                    <button type="submit"className={styles.btn_cadastrar}>Cadastrar</button>
                    </div>
                </form>
                <section className={styles.lista}>
                    <h2>Lista de jogos</h2>
                    <ListaCatalogo></ListaCatalogo>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
};
export default Cadastrar;