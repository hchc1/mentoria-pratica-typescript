function somarValores(in1: input, in2: input) {
  if (typeof in1 == 'string' || typeof in2 == 'string') {
    return in1.toString() + in2.toString();
  } else {
    return in1 + in2;
  }
}

type input = number | string;

console.log(1, 5);
console.log('a', 2);
console.log('ol', 'a');