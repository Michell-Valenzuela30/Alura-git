function actualizarUI(titulo, parrafoTexto, imagenSrc) {
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muñeco = document.getElementById("Muñeco");

  tituloMensaje.textContent = titulo;
  parrafo.textContent = parrafoTexto;
  muñeco.src = imagenSrc;
}

function encriptar() {
  const texto = document.getElementById("texto").value.toLowerCase(); // Convierte a minúsculas
  if (/[^a-z\s]/.test(texto)) {
    // Valida si hay caracteres especiales
    Swal.fire(
      "Error",
      "Solo se permiten letras minúsculas y sin acentos",
      "error"
    );
    return;
  }

  if (texto.length !== 0) {
    const textoCifrado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("texto").value = textoCifrado;
    actualizarUI("Texto encriptado con éxito", "", "./img/encriptado.jpg");

    // Mensaje de éxito
    Swal.fire("Encriptado", "El texto ha sido encriptado con éxito", "success");
  } else {
    actualizarUI(
      "Ningún mensaje fue encontrado",
      "Ingresa el texto que deseas encriptar o desencriptar",
      "./img/muñeco.png"
    );
    Swal.fire("Ooops", "Debes ingresar algún texto", "warning");
  }
}

function desencriptar() {
  const texto = document.getElementById("texto").value.toLowerCase(); // Convierte a minúsculas
  if (/[^a-z\s]/.test(texto)) {
    // Valida si hay caracteres especiales
    Swal.fire(
      "Error",
      "Solo se permiten letras minúsculas y sin acentos",
      "error"
    );
    return;
  }

  if (texto.length !== 0) {
    const textoDescifrado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("texto").value = textoDescifrado;
    actualizarUI("Texto desencriptado con éxito", "", "./img/encriptado.jpg");

    // Mensaje de éxito
    Swal.fire(
      "Desencriptado",
      "El texto ha sido desencriptado con éxito",
      "success"
    );
  } else {
    actualizarUI(
      "Ningún mensaje fue encontrado",
      "Ingresa el texto que deseas encriptar o desencriptar",
      "./img/muñeco.png"
    );
    Swal.fire("Ooops", "Debes ingresar algún texto", "warning");
  }
}

function copiarTexto() {
  const texto = document.getElementById("texto");
  texto.select();
  document.execCommand("copy");

  // Mensaje de éxito
  Swal.fire("Copiado", "El texto ha sido copiado al portapapeles", "success");
}
