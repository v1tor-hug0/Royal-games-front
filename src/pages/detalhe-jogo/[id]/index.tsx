import Footer from '../../components/Footer/footer';
import Header from '../../components/header/header';
import styles from './detalhe-jogo.module.css';
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {listarJogosId} from "@/pages/api/jogoService";
import {formatarPreco} from "@/utils/formatar";

interface Jogo{
    jogoID: number;
    nome: string;
    preco: number;
    descricao: string;
    imagemUrl: string;
    generos: [];
    plataformas: [];
    classificacaoNome: string;
}

const detalheJogo = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[jogo, setJogo] = React.useState<Jogo>()

    const params = useParams();
    const id = params?.id;



    async function listar(){
        try {
            const response = await listarJogosId(Number(id))
            setJogo(response)
        }
        catch(error: any){
            console.log(error.message);
        }
    }


    useEffect(() => {
        if(!id) return;

        setTimeout(() => {
            listar()
        }, 500)
    }, [id]);


    return(
        <>
            <Header></Header>
            <article className={styles.principal}>
                    <div className={styles.content}>

                        {jogo ?
                            (<>
                                <h2>Detalhes do Jogo</h2>

                                <div className={styles.info}>
                                    <div className={styles.imagem}>
                                        <img src={jogo?.imagemUrl} alt="Imagem do Jogo"/>
                                    </div>

                                    <div className={styles.descricao}>
                                        <h3>{jogo?.nome}</h3>
                                        <p>{jogo?.descricao}</p>
                                    </div>
                                </div>

                                <div className={styles.detalhes}>
                                    <div className={styles.detalhesLeft}>

                                        <div>
                                            <p>Plataformas:</p>
                                            <ul>
                                                {jogo?.plataformas.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p>Preço: <span>{formatarPreco(jogo?.preco)}</span></p>

                                    </div>
                                    <div className={styles.detalhesRight}>
                                        <div><p>Generos:</p>
                                            <ul>
                                                {jogo?.generos.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p>Classificação Indicativa: <span>{jogo?.classificacaoNome}</span></p>
                                    </div>
                                </div>
                            </>) : (<> <h1 style={{ color: "var(--cinza)" }} >Carregando detalhes do jogo...</h1> </>)}

                    </div>
            </article>
            <Footer></Footer>
        </>
    )
}
export default detalheJogo;