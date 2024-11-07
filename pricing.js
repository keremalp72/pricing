const priceChange = document.querySelector("#priceChange");

priceChange.addEventListener("input", change);

const price = document.querySelectorAll(".price");

function change() {
  if (priceChange.value == 1) {
    for (const prices of price) {
      prices.innerText = (parseFloat(prices.innerText) * 10 + 0.09).toFixed(2);
    }
  } else if (priceChange.value == 2) {
    for (const prices of price) {
      prices.innerText = (parseFloat(prices.innerText) / 10 - 0.01).toFixed(2);
    }
  }
}
