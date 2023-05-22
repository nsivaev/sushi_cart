function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptyBage = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector("#order-form");
  const totalSumEl = document.querySelector(".total-sum");

  // Скрываю блоки
  if (cartWrapper.children.length > 0) {
    cartEmptyBage.classList.add("none");

    orderForm.classList.remove("none");

    totalSumEl.classList.remove("none");
  } else {
    cartEmptyBage.classList.remove("none");

    orderForm.classList.add("none");

    totalSumEl.classList.add("none");
  }
}
