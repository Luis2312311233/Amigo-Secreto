const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaElementos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpiar resultado previo

    if (nombre === "") {
        alert("Error: Nombre vacío. Por favor ingresa un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    const li = document.createElement("li");
    li.textContent = nombre;
    listaElementos.appendChild(li);

    input.value = ""; // Limpiar el campo después de agregar
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceSorteado];
    
    const li = document.createElement("li");
    li.textContent = `🎉 Amigo secreto: ${amigoSecreto} 🎉`;
    resultado.appendChild(li);
}
