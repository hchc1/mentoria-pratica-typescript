function somarNumerosTratar(n1: number, n2: number, callback: (a: number) => number): number {
  let resultado = n1 + n2;
  return callback(resultado);

}

function aoQuadrat(numero: number): number {
  return numero * numero;
}

function dividirPorSi(nu: number): number {
  return nu / nu;
}

console.log(somarNumerosTratar(1, 3, aoQuadrat));
console.log(somarNumerosTratar(1, 3, dividirPorSi));