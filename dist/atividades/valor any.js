"use strict";
let valorAny;
valorAny = 3;
valorAny = 'aloha';
valorAny = false;
let valorString = 'teste';
valorString = valorAny;
let vaSt2 = 'iai';
vaSt2 = valorAny;
function somaString(st1, st2) {
    console.log(st1 + st2);
}
somaString(valorString, vaSt2);
// somando false com false === 0;
// somando true com true === 2;
