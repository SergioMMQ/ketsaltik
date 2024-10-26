// Cargar imágenes en la galería
const images = [
    "Diseño 0.jpg",
    "Diseño 1.jpg",
    "Diseño 2.jpg",
    "Diseño 3.jpg",
    "Diseño 4.jpg",
    "Diseño 5.jpg",
    "Diseño 6.jpg",
    "Diseño 7.jpg",
    "Diseño 8.jpg",
    "Diseño 9.jpg",
    "Diseño 10.jpg",
    "Diseño 11.jpg",
    "Diseño 12.jpg",
    "Diseño 13.jpg",
    "Diseño 14.jpg",
    "Diseño 15.jpg",
    "Diseño 16.jpg",
    "Diseño 17.jpg",
    "Diseño 18.jpg",
    "Diseño 19.jpg",
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

function closeAd() {
    document.getElementById("sidebarAd").style.display = "none";
}

