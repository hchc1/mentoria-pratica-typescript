function jogaErro(erro: string, codigo: number): never {
  throw {error: erro, code: codigo}

}
jogaErro('errou', 500);

// tipo never interrompe o codigo