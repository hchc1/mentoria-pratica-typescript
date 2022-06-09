"use strict";
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('errou', 500);
// tipo never interrompe o codigo
