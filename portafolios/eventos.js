function closeAd() {
    document.getElementById("sidebarAd").style.display = "none";
}
// Función para mostrar la imagen en pantalla completa
function showImage(src) {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = src;
    fullscreenContainer.style.display = 'flex';
}

// Función para cerrar la imagen en pantalla completa
function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    fullscreenContainer.style.display = 'none';
}

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('active');
}