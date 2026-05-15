export function formatarPreco(preco: number){
    return  preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}