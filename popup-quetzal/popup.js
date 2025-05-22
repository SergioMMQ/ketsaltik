window.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    popup.className = 'quetzal-popup';
    popup.innerHTML = `
      <div class="quetzal-close">×</div>
      ¿Necesitas una página web profesional para tu negocio?<br>
      <strong>¡Contáctanos y cotiza tu sitio hoy mismo!</strong>
      <span style="font-weight: bold;">Quetzalcode</span>
    `;
  
    // Click en el popup abre el enlace
    popup.addEventListener('click', () => {
      window.open('https://sergiommq.github.io/quetzalcode/', '_blank');
    });
  
    // Evita que el botón cerrar dispare el enlace
    popup.querySelector('.quetzal-close').addEventListener('click', (e) => {
      e.stopPropagation();
      popup.remove();
    });
  
    document.body.appendChild(popup);
  });
  