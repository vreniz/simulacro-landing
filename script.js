 // Animate the badge card on page load after a short delay
    window.addEventListener('load', function () {
    const badge = document.getElementById('badgeCard');
    if (!badge) return;

    // Aparece a los 600ms
    setTimeout(function () {
      badge.classList.add('badge-visible');
    }, 600);

    // Desaparece a los 3 segundos después de aparecer
    setTimeout(function () {
      badge.classList.remove('badge-visible');
    }, 3600);
  });

    // Cierra el menú burger al hacer click en cualquier enlace del nav
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('menu-toggle').checked = false;
    });
  });