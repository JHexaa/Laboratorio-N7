
function cambiarColor(){
    var colordiff = document.getElementById("colordiff");
    colordiff.style.color = 'red';
}

function agregarTexto(){
    var textoUsuario = document.getElementById("textoUsuario").value;
    document.getElementById("texto").innerHTML = textoUsuario;
}

function concatenarTexto(){
    var textoUsuario1 = document.getElementById("textoUsuario1").value;
    var textoUsuario2 = document.getElementById("textoUsuario2").value;
    var textoConcatenado = textoUsuario1 + textoUsuario2;
    document.getElementById("concatenar").innerHTML = textoConcatenado;
}

function eliminarElemento(){
    var elemento = document.getElementById("elementos");
    elemento.remove(elemento.selectedIndex);
}

function abrirVideo(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")
}

function mandarMensaje(){
    var texto3 = textoUsuario1.value + textoUsuario2.value;
    alert(texto3);
}

function enviarEstadoCajita(){
    var cajita = document.getElementById("cajita").checked;
    document.getElementById("estadoCajita").innerHTML = cajita;
}

function enviarEstadoBolita(){
    var bolitas = document.getElementById("bolitas");
    for(i=0;i<bolitas.length;i++){
        if(bolitas[i].checked){
            document.getElementById("estadoBolita").innerHTML = bolitas[i].value;
        }
    }
}

function validarTextoNum(){
    var validarTexto = document.getElementById("validarTexto").value;
    var regex = /^[^\d]+$/;
    if (regex.test(validarTexto)) {
        document.getElementById("mensaje").innerHTML = "VALORES VALIDO";
    } 
    else {
        document.getElementById("mensaje").innerHTML = "VALORES INVALIDO, NO UTILICE VALORES NUMERICOS";
    }
}