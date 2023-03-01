// Classe do Produto
class Produto{
    constructor(codigo,nome,descricao,valor,quantidade){
        this.codigo = codigo
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
        this.quantidade = quantidade
    }

    // Mostra os dados do Produto: Código, Nome, Descrição, Valor e Quantidade.
    mostrarDados(){
        console.log(` Código: ${this.codigo} Nome: ${this.nome} Descrição: ${this.descricao} Valor: ${this.valor} Quantidade: ${this.quantidade}`)
    }

    //  Alterar a quantidade do produto.
    alterarQuantidade(quantidade){
        this.quantidade = quantidade
    }

}

// Função que executa o contrutor da classe Produto.
function criarProduto(codigo,nome,descricao,valor,quantidade){
    const produto1 = new Produto(codigo,nome,descricao,valor,quantidade)
    return produto1
}

// Exportando classes, funções.
export {Produto,criarProduto}