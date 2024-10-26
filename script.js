// Cargar imágenes en la galería
const images = [
    "Diseño 1.jpg",
    "Diseño 2.jpg",
    "Diseño 3.jpg",
    "Diseño 4.jpg"
];

const galeria = document.getElementById('galeria');

images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('item');
    
    const img = document.createElement('img');
    img.src = `img/${image}`;
    img.alt = image.split('.')[0].replace('-', ' ');
    
    // Evento para abrir el lightbox al hacer clic en la imagen
    img.onclick = function() {
        openLightbox(this.src, this.alt);
    };
    
    const p = document.createElement('p');
    p.textContent = img.alt;

    item.appendChild(img);
    item.appendChild(p);
    galeria.appendChild(item);
});

// Función para abrir el lightbox
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = "block";
    lightboxImg.src = src;
    lightboxImg.alt = alt;
}

// Cerrar el lightbox
document.querySelector('.close').onclick = function() {
    document.getElementById('lightbox').style.display = "none";
};

// Cerrar el lightbox al hacer clic fuera de la imagen
document.getElementById('lightbox').onclick = function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};
