window.addEventListener("click", function (event) {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      // Изменяем текст в счетчике уменьшая его на 1
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      // Удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      // Отображение статуса корзины Пустая / Полная
      toggleCartStatus();

      // Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + или - внутри коризины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    // Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }
});
