
let textoInicial = [];
let textoEncriptado = [];
let textoDesencriptado = [];


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarTexto() {
    almacenarEnArray(document.getElementById('textoUsuario').value);

    if(validarTexto() == true){
        for (let i = 0; i < textoInicial.length; i++) {
            if(textoInicial[i] === 'a'){
                textoEncriptado[i] = 'ai';
            } else {
                if (textoInicial[i] === 'e') {
                    textoEncriptado[i] = 'enter';
                } else {
                    if (textoInicial[i] === 'i') {
                        textoEncriptado[i] = 'imes';
                    } else {
                        if (textoInicial[i] === 'o') {
                            textoEncriptado[i] = 'ober';
                        } else {
                            if (textoInicial[i] === 'u') {
                                textoEncriptado[i] = 'ufat';
                            } else {
                                textoEncriptado[i] = textoInicial[i];
                            }
                        }
                    }
                }
            }
        }
        asignarTextoElemento('p',textoEncriptado.join('')); // array a string
    }else{
        alert('No se aceptan mayúsculas');
    }
    vaciarArrays();
    document.getElementById('textoUsuario').value = '';  
}

function desencriptarTexto() {
    almacenarEnArray(document.getElementById('textoUsuario').value);
    if(validarTexto() == true){
        for (let i = 0; i < textoInicial.length; i++) {
            if(textoInicial[i] === 'a'){
                textoDesencriptado[i] = textoInicial[i];
                textoInicial.splice(i+1,1);
            } else {
                if (textoInicial[i] === 'e') {
                    textoDesencriptado[i] = textoInicial[i];
                    textoInicial.splice(i+1,4);
                } else {
                    if (textoInicial[i] === 'i') {
                        textoDesencriptado[i] = textoInicial[i];
                        textoInicial.splice(i+1,3);
                    } else {
                        if (textoInicial[i] === 'o') {
                            textoDesencriptado[i] = textoInicial[i];
                            textoInicial.splice(i+1,3);
                        } else {
                            if (textoInicial[i] === 'u') {
                                textoDesencriptado[i] = textoInicial[i];
                                textoInicial.splice(i+1,3);
                            } else {
                                textoDesencriptado[i] = textoInicial[i];
                            }
                        }
                    }
                }
            }
        }
        asignarTextoElemento('p',textoDesencriptado.join('')); // array a string  
        
    }else{
        alert('No se aceptan mayúsculas');
    }
    vaciarArrays();
    document.getElementById('textoUsuario').value = '';
    console.log(textoInicial);
}

function almacenarEnArray(texto) {
    console.log(typeof(texto));
    textoInicial = [...texto];  //string a array
    console.log(textoInicial);
}

function copiarTexto() {
    let texto = document.getElementById('textoParrafo').innerText;
    navigator.clipboard.writeText(texto);
    console.log(texto);
    //document.getElementById('textoUsuario').value = texto;
}

function vaciarArrays(){
    textoInicial = [];
    textoDesencriptado = [];
    textoEncriptado = [];
}

function validarTexto(){
    for (let i = 0; i < textoInicial.length; i++) {
        if (/[A-Z]/.test(textoInicial[i])) {
            return false;
        }else{
            return true;
        }
      }
}

asignarTextoElemento('p','hola ingresa un texto');



