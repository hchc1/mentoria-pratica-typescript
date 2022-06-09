"use strict";
const pessoa = {
    nome: 'Carol',
    idade: 28,
    profissao: 'acougueira'
};
const andrades = {
    nome: 'andrades',
    idade: 25,
    profissao: 'vendedor'
};
var profissao;
(function (profissao) {
    profissao[profissao["professor"] = 0] = "professor";
    profissao[profissao["atriz"] = 1] = "atriz";
    profissao[profissao["acougueira"] = 2] = "acougueira";
    profissao[profissao["vendedor"] = 3] = "vendedor";
    profissao[profissao["pescador"] = 4] = "pescador";
    profissao[profissao["cobrador"] = 5] = "cobrador";
})(profissao || (profissao = {}));
const Vanessa = {
    nome: 'Vanessa',
    idade: 32,
    profissao: profissao.cobrador
};
const Manoel = {
    nome: 'Manoel',
    idade: 20,
    profissao: profissao.professor,
    materias: ['historia', 'historia geral', 'historia do brasil']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Manoel.materias);
