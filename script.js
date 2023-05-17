const ingresoTexto = document.querySelector(".ingreso-texto");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar (fraseEncriptada){
    let matrixCambios = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase()
    for(let i = 0; i < matrixCambios.length; i++){
        if(fraseEncriptada.includes(matrixCambios[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrixCambios[i][0], matrixCambios[i][1]);
        }
    }
    return fraseEncriptada;
}

function botonEncriptar(){
        const textEncriptado = encriptar(ingresoTexto.value);
        if (textEncriptado.length == 0){
            textos.style.display = "block"
            mensajeEncriptado.style.backgroundImage = ""; 
            mensajeEncriptado.value = "";
        }
        else {
            mensajeEncriptado.value = textEncriptado; 
            ingresoTexto.value = "";
            mensajeEncriptado.style.backgroundImage = "none"; 
            textos.style.display = "none";
        }

}

function desencriptar (fraseDesencriptada){
    let matrixCambios = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();
    for (let i = 0; i < matrixCambios.length; i++){
        if (fraseDesencriptada.includes(matrixCambios[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrixCambios[i][1], matrixCambios[i][0])
        }
    }
    return fraseDesencriptada;
}

function botonDesencriptar(){
    const textDesencriptado = desencriptar(ingresoTexto.value);
    mensajeEncriptado.value = textDesencriptado;
    ingresoTexto.value = "";
}

function botonCopiar (){
    let = textoCopiado = document.querySelector(".mensaje-encriptado");
    textoCopiado.select();
    document.execCommand('copy');
}

