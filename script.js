function closeAd() {
  document.getElementById("sidebarAd").style.display = "none";
}

const imageSets = {
  "craneo": [
    "/img/craneo/Diseño0.jpg",
    "/img/craneo/Diseño1.jpg",
    "/img/craneo/Diseño2.jpg",
    "/img/craneo/Diseño3.jpg",
    "/img/craneo/Diseño4.jpg",
    "/img/craneo/Diseño5.jpg",
    "/img/craneo/Diseño6.jpg",
    "/img/craneo/Diseño7.jpg",
    "/img/craneo/Diseño8.jpg",
    "/img/craneo/Diseño9.jpg",
    "/img/craneo/Diseño10.jpg",
    "/img/craneo/Diseño11.jpg",
    "/img/craneo/Diseño12.jpg",
    "/img/craneo/Diseño13.jpg",
    "/img/craneo/Diseño14.jpg",
    "/img/craneo/Diseño15.jpg",
    "/img/craneo/Diseño16.jpg"
  ],
  "animados": [
    "/img/animados/abstractos/Diseño0.jpg",
    "/img/animados/abstractos/Diseño1.jpg",
    "/img/animados/heroes/Diseño0.jpg",
    "/img/animados/heroes/Diseño1.jpg"
  ]
};

document.querySelectorAll('.card.hover-bg').forEach(card => {
  const setName = card.dataset.images;
  const images = imageSets[setName];
  let intervalId;

  // Guarda el fondo original definido en el HTML (style="background: ...")
  const originalBackground = card.style.background;

  function setRandomBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    card.style.background = `url(${randomImage}) center/cover no-repeat`;
  }

  card.addEventListener("mouseenter", () => {
    setRandomBackground();
    intervalId = setInterval(setRandomBackground, 2000);
  });

  card.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    card.style.background = originalBackground; // ← restauramos el fondo original
  });
});
