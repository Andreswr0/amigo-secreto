// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombreInputId = document.getElementById("amigo");
        if (nombreInputId.value.trim() !== "") {
        amigos.push(nombreInputId.value);
        mostrarAmigos();
    }   else {
            alert("Por favor, inserte un nombre.");
    }
}
function mostrarAmigos() {
    let listaAmigo = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigo.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert('Necesitas dos amigos para realizar el sorteo')
            return;
    }
    if (amigos.length > 10) {
        alert( 'El maximo de amigos a sortear es 10')
            return;
    }
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById("resultado");
        let li = document.createElement("li");
        li.textContent = "Tu amigo secreto es " + amigoSorteado;
        resultado.appendChild(li);

}
// Con ayuda de los chicos de alura se pudo gracias <3
