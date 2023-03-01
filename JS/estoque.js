import { Produto,criarProduto } from "./produto.js"

//  Classe de Estoque
class Estoque {
    constructor(nomeEstoque,dataCriacao){
        this.nomeEstoque = nomeEstoque
        this.dataCriacao = dataCriacao
        this.armazem = []
    }

    // Adicionar Produto ao Estoque
    adicionarProduto(nome,descricao,valor,quantidade){
        const produto1 = criarProduto((this.armazem.length + 1),nome,descricao,valor,quantidade)
        this.armazem.push(produto1)
    }

    // Remover Produto do Estoque
    removerProduto(produto){
        this.armazem.shift(produto)
    }

    // Alterar a quantidade do produto presente no Estoque
    alterarQuantidade(codigo,novaQuantidade){
        this.armazem[codigo].alterarQuantidade(novaQuantidade)
    }

    // Mostrar Informações do Armazem incluindo o estoque dentro.
    mostrarArmazem(){
        console.log(`Estoque: ${this.nomeEstoque} Data de Criação: ${this.dataCriacao}`)
        console.log('---------- ESTOQUE ----------')
        for(var i = 0; i<(this.armazem.length);i++){
            this.armazem[i].mostrarDados()
        }
        console.log('-----------------------------')
    }

    // Vender produto: remove quantidade descrita do estoque.
    vendaProduto(codigo,quantidade){
        for(var i = 0; i<(this.armazem.length);i++){
            if(this.armazem[i].codigo == codigo){
                this.armazem[i].quantidade -= quantidade
            }
        }
    }

    // Comprar produto: adiciona quantidade descrita no estoque.
    compraProduto(codigo,quantidade){
        for(var i = 0; i<(this.armazem.length);i++){
            if(this.armazem[i].codigo == codigo){
                this.armazem[i].quantidade += quantidade
            }
        }
    }

}

// Função que exetuca o contrutor de criar Estoque.
function criarEstoque(nomeEstoque,dataCriacao){
    const estoque1 = new Estoque(nomeEstoque,dataCriacao)
    return estoque1
}

// Exportando Classes, funções.
export {Estoque,criarEstoque}