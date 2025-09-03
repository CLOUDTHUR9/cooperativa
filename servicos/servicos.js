// Reveal ao rolar (igual ao do index)
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(reveal => observer.observe(reveal));

    // Garante que addToCart exista (caso esta página seja aberta isolada)
    if (typeof addToCart !== 'function') {
      let cartCount = 0;
      function addToCart() {
        cartCount++;
        const el = document.getElementById('cart-count');
        if (el) el.innerText = cartCount;
      }
      window.addToCart = addToCart;
    }

    // Wrapper para usar nome/preço se quiser evoluir depois
    function scheduleService(name, price) {
      addToCart();
      // Aqui dá pra abrir modal/whatsapp/agendamento no futuro
      console.log(`Agendado: ${name} - R$ ${price}`);
    }
