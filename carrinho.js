let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close');

  // Abrir ao clicar em QUALQUER imagem do grid
  document.addEventListener('click', function (e) {
  const img = e.target.closest('.portfolio-grid img');
    if (img) {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // trava scroll
    }
  });

  // Fechar no X ou clicando fora da imagem
  lightbox.addEventListener('click', function (e) {
    const clicouFora = e.target === lightbox || e.target === closeBtn;
    if (clicouFora) fecharLightbox();
  });

  // Fechar com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      fecharLightbox();
    }
  });

  function fecharLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    document.body.style.overflow = ''; // libera scroll
  }
})();


