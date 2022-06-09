// Como podemos melhorar o esse código usando TS? 
enum Profissao {
  atriz, padeiro
}
type Pessoa = {
  nome: string,
  idade: number,
  profissao: Profissao
}

let pessoa1: Pessoa = {
  nome:"maria",
  idade: 29,
  profissao: Profissao.atriz
}

let pessoa2: Pessoa= {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.padeiro
}

let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
}