let anyOutraVez: any;
let UnknownValor: unknown;

anyOutraVez = 3;
anyOutraVez = 'oloco';


UnknownValor = 3;
UnknownValor = 'string';
UnknownValor = true;
UnknownValor = 'tipostring'
let string = 'allo';
// string = UnknownValor;

if (typeof UnknownValor
 === 'string') {
  string = UnknownValor
;
}