let valorAny: any;

valorAny = 3;
valorAny = 'aloha';
valorAny = false;

let valorString: string = 'teste';
valorString = valorAny;
let vaSt2: string = 'iai';
vaSt2 = valorAny 

function somaString(st1: string, st2: string) {
  console.log(st1 + st2);
}

somaString(valorString, vaSt2);

// somando false com false === 0;
// somando true com true === 2;