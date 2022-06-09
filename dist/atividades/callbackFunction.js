"use strict";
function somarNumerosTratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrat(numero) {
    return numero * numero;
}
function dividirPorSi(nu) {
    return nu / nu;
}
console.log(somarNumerosTratar(1, 3, aoQuadrat));
console.log(somarNumerosTratar(1, 3, dividirPorSi));
