import { api } from "./api"

type JogoForm = {
    nome: string,
    imagem: File | null,
    descricao: string,
    preco: number,
    GeneroIds: number[],
    PlataformaIds: number[],
    ClassificacaoID: number
}



interface JogoLista  {
    nome: string,
    preco: number,
    descricao: number,
    imagemUrl?: string,
    statusJogo: boolean
    generos: string[],
    plataformas: string[],
    classificacaoNome: string
}


export async function listarJogos(){
    try {
        const response = await api.get("Jogo");

        console.log(response.data);
        const jogosAtivos = response.data.filter((jogo: JogoLista) => jogo.statusJogo == true);

        console.log(jogosAtivos);

        const jogos = jogosAtivos.map((jogo: JogoLista) => (
            {...jogo ,
                imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
            }
        ))
        console.log(jogos);

        return jogos;
    }
    catch(error: any) {
        throw new Error(error.response.data)
    }
}