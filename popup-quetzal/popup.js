window.addEventListener('DOMContentLoaded', () => {
  // Forzar idioma detectado en orden: localStorage > atributo HTML <html lang=""> > navegador
  let lang = localStorage.getItem('preferredLanguage');

  if (!lang) {
    lang = document.documentElement.getAttribute('lang') || navigator.language.slice(0, 2);
    localStorage.setItem('preferredLanguage', lang); // Guarda para futuras páginas
  }

  const messages = {
    es: {
      text: `¿Necesitas una página web profesional para tu negocio?<br>
             <strong>¡Contáctanos y cotiza tu sitio hoy mismo!</strong>
             <span style="font-weight: bold;">Quetzalcode</span>`
    },
    en: {
      text: `Do you need a professional website for your business?<br>
             <strong>Contact us and get your site quoted today!</strong>
             <span style="font-weight: bold;">Quetzalcode</span>`
    }
  };

  const selected = messages[lang] || messages['en']; // Fallback inglés

  const popup = document.createElement('div');
  popup.className = 'quetzal-popup';
  popup.innerHTML = `
    <div class="quetzal-close">×</div>
    ${selected.text}
  `;

  popup.addEventListener('click', () => {
    window.open('https://sergiommq.github.io/quetzalcode/', '_blank');
  });

  popup.querySelector('.quetzal-close').addEventListener('click', (e) => {
    e.stopPropagation();
    popup.remove();
  });

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 10000);
});
