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

  // проверка на товар внутри корзины
  if (event.target.closest(".cart-wrapper") && counter.innerText === "1") {
    event.target.closest(".cart-item").remove();

    toggleCartStatus();
  }

  if (event.target.dataset.action === "minus") {
    counter.innerText > "1" ? --counter.innerText : null;
  }
  
});
