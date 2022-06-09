const pessoa = {
  nome: 'Carol',
  idade: 28,
  profissao: 'acougueira'
};

const andrades: {nome: string, idade: number, profissao: string} = {
  nome: 'andrades',
  idade: 25,
  profissao: 'vendedor'
}

enum profissao {
  professor,
  atriz,
  acougueira,
  vendedor,
  pescador,
  cobrador
}

interface IPessoa {
  nome: string,
  idade: number,
  profissao?: profissao
}

const Vanessa: IPessoa = {
  nome: 'Vanessa',
  idade: 32,
  profissao: profissao.cobrador

}

interface IEstudante extends IPessoa {
  materias: string[]
}

const Manoel : IEstudante = {
  nome: 'Manoel',
  idade: 20,
  profissao: profissao.professor,
  materias: ['historia', 'historia geral', 'historia do brasil']
}

function listar(lista: string[]) {
  for (const item of lista) {
    console.log('- ', item);
  }
}

listar(Manoel.materias);
