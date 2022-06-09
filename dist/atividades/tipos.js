"use strict";
function somarValores(in1, in2) {
    if (typeof in1 == 'string' || typeof in2 == 'string') {
        return in1.toString() + in2.toString();
    }
    else {
        return in1 + in2;
    }
}
console.log(1, 5);
console.log('a', 2);
console.log('ol', 'a');
