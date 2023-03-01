import { Estoque,criarEstoque } from "./estoque.js";

// Criação de Estoque
const estoque1 = criarEstoque("Crowler Components","12/05/2009")

// Adicionando Produtos no Estoque Criado
estoque1.adicionarProduto("Mouse","Mouse Red Dragon","20,00",10)
estoque1.adicionarProduto("HeadSet","HeadSet Razer Kraken","350,00",5)
estoque1.adicionarProduto("Mouse","Mouse Red Dragon","20,00",10)

// Mostrando Armazen
estoque1.mostrarArmazem()

// Retirando produto do armazem
estoque1.vendaProduto(1,2)

// Colocando produto no armazem
estoque1.compraProduto(3,10)

// Mostrando Armazem
estoque1.mostrarArmazem()