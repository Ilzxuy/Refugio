// Función para mostrar/ocultar el mapa
function toggleMap() {
    var x = document.getElementById("map");
    var btn = document.getElementById("mapButton");
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.innerHTML = "Cerrar Mapa";
    } else {
        x.style.display = "none";
        btn.innerHTML = "Abrir Mapa";
    }
}