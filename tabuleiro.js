class Tabuleiro {
    constructor (cor, x, y, linha, coluna, altura, largura, nome) {
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
    }
}

class Peca {
    constructor (cor, linha, coluna, altura, largura, nome, img) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.img = img;
    }
}

const cor1 = "#fff"; // branco
const cor2 = "#000"; // preto
const medida = "px"; // unidade de medida em pixel
const larguraCelulaPadrao = 100;
const alturaCelulaPadrao = 100;
const larguraPecaPadrao = 50;
const alturaPecaPadrao = 50;
const linhas = ["1","2","3","4","5","6","7","8"];
const colunas = ["a","b","c","d","e","f","g","h"];
const totalCelulas = linhas.length * colunas.length;

var pecas = [];

pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", './torre_preta.png');
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", './torre_preta.png');
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", './torre_preta.png');
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", './torre_preta.png');
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", './torre_preta.png');
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", './torre_preta.png');
pecas[6] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", './torre_preta.png');
pecas[7] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", './torre_preta.png');
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", './torre_preta.png');
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", './torre_preta.png');
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", './torre_preta.png');
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", './torre_preta.png');
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", './torre_preta.png');
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", './torre_preta.png');
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", './torre_preta.png');
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", './torre_preta.png');

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", './torre_preta.png');
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", './torre_preta.png');
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", './torre_preta.png');
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", './torre_preta.png');
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", './torre_preta.png');
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", './torre_preta.png');
pecas[22] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", './torre_preta.png');
pecas[23] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", './torre_preta.png');
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", './torre_preta.png');
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", './torre_preta.png');
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", './torre_preta.png');
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", './torre_preta.png');
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", './torre_preta.png');
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", './torre_preta.png');
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", './torre_preta.png');
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", './torre_preta.png');

var celula = [];
var numCelula = 0;
var corAtual = cor1;
var posicaoSuperior = 0;

for (let l = 0; l < linhas.length; l++) {
    let posicaoEsquerda = 0;
    if (corAtual == cor1) {
        corAtual = cor2;
    } else {
        corAtual = cor1;
    }
    for (let c = 0; c < colunas.length; c++) {
        celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l]);
        posicaoEsquerda += larguraCelulaPadrao;

        // console.log("corAtual antes: ", corAtual);
        if (corAtual == cor1) {
            corAtual = cor2;
        } else {
            corAtual = cor1;
        }
        // console.log("corAtual depois: ", corAtual);

        numCelula++;
    }
    posicaoSuperior += alturaCelulaPadrao;
}

var divsCelulas = [];

// console.log("celula[63].nome: ", celula[63].nome);

console.log(pecas);

for (let c = 0; c < celula.length; c++) {
    divsCelulas[c] = document.createElement("div");
    divsCelulas[c].id = celula[c].nome;
    divsCelulas[c].style.backgroundColor = celula[c].cor;
    divsCelulas[c].style.position = "absolute";
    divsCelulas[c].style.top = celula[c].x + medida;
    divsCelulas[c].style.left = celula[c].y + medida;
    divsCelulas[c].style.height = celula[c].altura + medida;
    divsCelulas[c].style.width = celula[c].largura + medida;
    // divsCelulas[c].innerText = celula[c].coluna + celula[c].linha;
    if (celula[c].cor == cor1) {
        divsCelulas[c].style.color = cor2;
    } else {
        divsCelulas[c].style.color = cor1;
    }
    divsCelulas[c].style.display = "grid";
    // divsCelulas[c].style.textAlign = "center";
    divsCelulas[c].style.alignItems = "center";

    for (let p = 0; p < pecas.length; p++) {
        // console.log("celula[" + c + "].linha: ", celula[c].linha);
        // console.log("pecas[" + p + "].linha: ", celula[c].linha);
        // console.log("------------------------");
        // console.log("celula[" + c + "].coluna: ", celula[c].coluna);
        // console.log("pecas[" + p + "].coluna: ", celula[c].coluna);
        if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) {
            let peca_tmp = document.createElement("img");
            peca_tmp.src = pecas[p].img;
            peca_tmp.width = pecas[p].largura;
            peca_tmp.height = pecas[p].altura;
            peca_tmp.style.marginLeft = "auto";
            peca_tmp.style.marginRight = "auto";
            peca_tmp.id = pecas[p].nome;
            divsCelulas[c].appendChild(peca_tmp);
            // console.log("achou");
        } else {
            // console.log("não achou");
        }
    }

    document.body.appendChild(divsCelulas[c]);
}

/**
 * Desafio: criar todos os 64 "objetos" conforme variável acima
 */

class Movimento {
    constructor() {
        this.movimentosPossiveis = [];
    }

    moverTorre(linhaAtual, colunaAtual, tabuleiro) {
        // Limpar a lista de movimentos possíveis
        this.movimentosPossiveis = [];

        // Movimentos horizontais e verticais
        for (let i = 1; i < 8; i++) {
            if (linhaAtual + i < 8 && tabuleiro[linhaAtual + i][colunaAtual].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual + i, colunaAtual]);
            }
            if (linhaAtual - i >= 0 && tabuleiro[linhaAtual - i][colunaAtual].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual - i, colunaAtual]);
            }
            if (colunaAtual + i < 8 && tabuleiro[linhaAtual][colunaAtual + i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual, colunaAtual + i]);
            }
            if (colunaAtual - i >= 0 && tabuleiro[linhaAtual][colunaAtual - i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual, colunaAtual - i]);
            }
        }

        return this.movimentosPossiveis;
    }

    moverCavalo(linhaAtual, colunaAtual, tabuleiro) {
        this.movimentosPossiveis = [];

        // Movimentos do cavalo (em forma de L)
        if (linhaAtual + 2 < 8 && colunaAtual + 1 < 8 && tabuleiro[linhaAtual + 2][colunaAtual + 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push([linhaAtual + 2, colunaAtual + 1]);
        }
        if (linhaAtual + 2 < 8 && colunaAtual - 1 >= 0 && tabuleiro[linhaAtual + 2][colunaAtual - 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push([linhaAtual + 2, colunaAtual - 1]);
        }
        if (linhaAtual - 2 >= 0 && colunaAtual + 1 < 8 && tabuleiro[linhaAtual - 2][colunaAtual + 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push([linhaAtual - 2, colunaAtual + 1]);
        }
        if (linhaAtual - 2 >= 0 && colunaAtual - 1 >= 0 && tabuleiro[linhaAtual - 2][colunaAtual - 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push(([linhaAtual - 2, colunaAtual - 1]))
        }

        return this.movimentosPossiveis;
    }

    moverBispo(linhaAtual, colunaAtual, tabuleiro) {
        this.movimentosPossiveis = [];

        // Movimentos diagonais
        for (let i = 1; i < 8; i++) {
            if (linhaAtual + i < 8 && colunaAtual + i < 8 && tabuleiro[linhaAtual + i][colunaAtual + i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual + i, colunaAtual + i]); 
            } 
            if (linhaAtual - i >= 0 && colunaAtual + i < 8 && tabuleiro[linhaAtual - i][colunaAtual + i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual - i, colunaAtual + i]); 
            } 
            if (linhaAtual + i < 8 && colunaAtual - i >= 0 && tabuleiro[linhaAtual + i][colunaAtual - i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual + i, colunaAtual - i]); 
            } 
            if (linhaAtual - i >= 0 && colunaAtual - i >= 0 && tabuleiro[linhaAtual - i][colunaAtual - i].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
                this.movimentosPossiveis.push([linhaAtual - i, colunaAtual - i]); 
            } 
        }

        return this.movimentosPossiveis; 
        
    }
    

    moverPeao(linhaAtual, colunaAtual, tabuleiro) {
        this.movimentosPossiveis = [];

        //Movimentos do peão para frente 
        if (linhaAtual + 1 < 8 && tabuleiro[linhaAtual + 1][colunaAtual].cor === null) {
            this.movimentosPossiveis.push([linhaAtual + 1, colunaAtual]);

            // Movimento especial para o primeiro movimento do peão
            if (tabuleiro[linhaAtual][colunaAtual].movimentoEspecial === true && linhaAtual === 1) {
                if (tabuleiro[linhaAtual + 2][colunaAtual].cor === null) {
                    this.movimentosPossiveis.push([linhaAtual + 2, colunaAtual]);
                }
            }
        }

        // Captura diagonalmente
        if (linhaAtual + 1 < 8 && colunaAtual + 1 < 8 && tabuleiro[linhaAtual + 1][colunaAtual + 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push([linhaAtual + 1, colunaAtual + 1]);
        }
        if (linhaAtual + 1 < 8 && colunaAtual - 1 >= 0 && tabuleiro[linhaAtual + 1][colunaAtual - 1].cor !== tabuleiro[linhaAtual][colunaAtual].cor) {
            this.movimentosPossiveis.push([linhaAtual + 1, colunaAtual - 1]);
        }

            return this.movimentosPossiveis;
        }
    }

    moverRainha(linhaAtual, colunaAtual, tabuleiro) {
        this.movimentosPossiveis = [];

        
    }