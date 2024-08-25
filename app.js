function encriptar(){
    /*value.toLowerCase()= para que el texto ingresado se convierta en minúsculas*/
    var text = document.getElementById("ingreseTexto").value.toLowerCase();
    /*/e/= para que identifique todas las "e" en el texto y no solo la primera*/ 
    /*igm= i= Influye tanto minúsculas como mayúsculas
           g= Ingluye toda la línea
           m= Influye todo el parrafo */
    var encriptacion = text.replace(/e/igm,"enter");
    /* se ira reemplazando el texto anterior*/
    var encriptacion = encriptacion.replace(/o/igm,"ober");
    var encriptacion = encriptacion.replace(/i/igm,"imes");
    var encriptacion = encriptacion.replace(/a/igm,"ai");
    var encriptacion = encriptacion.replace(/u/igm,"ufat");

    document.getElementById("Presentacion_imagen").style.display = "none";
    document.getElementById("Mensaje_Nofound").style.display = "none";
    document.getElementById("Submensaje").innerHTML = encriptacion;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    /*value.toLowerCase()= para que el texto ingresado se convierta en minúscula*/
    var text = document.getElementById("ingreseTexto").value.toLowerCase();
    /*/e/= para que identifique todas las "e" en el texto y no solo la primera*/ 
    /*igm= i= Influye tanto minúsculas como mayúsculas
           g= Ingluye toda la línea
           m= Influye todo el parrafo */
    var encriptacion = text.replace(/enter/igm,"e");
    /* se ira reemplazando el texto anterior*/
    var encriptacion = encriptacion.replace(/ober/igm,"o");
    var encriptacion = encriptacion.replace(/imes/igm,"i");
    var encriptacion = encriptacion.replace(/ai/igm,"a");
    var encriptacion = encriptacion.replace(/ufat/igm,"u");

    document.getElementById("Presentacion_imagen").style.display = "none";
    document.getElementById("Mensaje_Nofound").style.display = "none";
    document.getElementById("Submensaje").innerHTML = encriptacion;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar() {
    /* Selecciona la caja de texto por su ID*/
    var texto = document.getElementById("Submensaje");

    /*Selecciona el contenido del input*/
    texto.select();

    texto.setSelectionRange(0, 99999);

    /* Copia el texto al portapapeles*/
    document.execCommand("copy");

    /* Muestra el mensaje de alerta*/
    alert("Texto copiado");
}