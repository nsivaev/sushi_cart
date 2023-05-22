function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");
  const deliveryFree = document.querySelector(".delivery-free");

  let totalPrice = 0;
  let deliveryPrice = 100;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });

  // цена на странице
  // totalPriceEl.innerText = totalPrice + " ₽";

  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  if (totalPrice >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно";

    deliveryFree.classList.add("none");

    // итоговая сумма без доставки
    totalPriceEl.innerText = totalPrice + " ₽";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "100 ₽";

    deliveryFree.classList.remove("none");

    // итоговая сумма с доставкой
    totalPriceEl.innerText = totalPrice + deliveryPrice + " ₽";
  }
}
