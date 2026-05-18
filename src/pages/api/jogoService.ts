import { api } from "./api"

type JogoForm = {
    nome: string,
    imagem: File | null,
    descricao: string,
    preco: number,
    generoIds: number[],
    plataformaIds: number[],
    classificacaoID: number
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

        const jogosAtivos = response.data.filter((jogo: JogoLista) => jogo.statusJogo == true);


        const jogos = jogosAtivos.map((jogo: JogoLista) => (
            {...jogo ,
                imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
            }
        ))


        return jogos;
    }
    catch(error: any) {
        throw new Error(error.response.data)
    }
}

export async function listarJogosId( id: number){
    try {
        const response = await api.get("Jogo/" + id)

        const jogos = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`

        };

        return jogos;
    }
    catch(error: any) {
        throw new Error(error.response.data)
    }
}

export async function CadastrarJogo(dados: JogoForm){
    try{
        const formData = new FormData();
        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", (dados.preco).toString())
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }

        dados.generoIds.forEach((id) => {
            formData.append("generoIds"), id.toString());
            })
    }
    catch(error: any){
        throw new Error(error.response.data)
    }
}