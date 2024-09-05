function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
    .replace(/a/gi, "enter")
    .replace(/e/gi, "imes")
    .replace(/i/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    /*El método replace se usa para reemplazar todas las ocurrencias de la letra “a” (sin importar si es mayúscula o minúscula) por la cadena “enter”. La expresión regular /a/gi se desglosa así:
    /a/. busca la letra “a”.
    g. (global) indica que debe buscar todas las ocurrencias en el texto.
    i. (insensitive) indica que la búsqueda no distingue entre mayúsculas y minúsculas.
    */ 
   if(texto.length!=0){
        document.getElementById("texto") = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";

    } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o  desencriptar";
        swal("Ooops","Debes ingresar algún texto","Warning");
        
        //swal es la abreviacion de SweetAlert 
        /*alert("Debes ingresar algún texto");*/
    }
}
function desencriptar(){
    //define nuevamente las variables, ya que se trata de bloques de funciones diferentes
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
    
    .replace(/enter/gi, "a")
        .replace(/imes/gi, "e")
        .replace(/ai/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
        //Ahora aplica la Psicologìa inversa jj
        
        if(texto.length!=0){
        document.getElementById("texto") = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
        
    } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o  desencriptar";
        swal("Ooops","Debes ingresar algún texto","Warning");
        
        //alert("Debes ingresar algún texto");
        /*
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe ingresar algún texto ;)"
            });
            */
        }
    }
    
    