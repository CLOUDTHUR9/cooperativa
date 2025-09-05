let cartCount = 0;

// Atualiza carrinho
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

// Agendamento com nome e preço
function scheduleService(name, price) {
  addToCart();
  console.log(`Agendado: ${name} - R$ ${price}`);
  alert(`Você adicionou "${name}" ao carrinho por R$${price}`);
}
