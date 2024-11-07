const priceChange = document.querySelector("#priceChange");

priceChange.addEventListener("input", change);

const prices = document.querySelectorAll(".price");

function change() {
  
  if (priceChange.value == 1) {

    for (const price of prices) {
      price.innerHTML = `<span class="dollarsign">$</span> <span class="miktar">${(parseFloat(price.querySelector(".miktar").innerText) * 10 + 0.09).toFixed(2)}</span>`;
    }
  } else if (priceChange.value == 2) {
    for (const price of prices) {
      price.innerHTML = `<span class="dollarsign">$</span> <span class="miktar">${(parseFloat(price.querySelector(".miktar").innerText) / 10 - 0.01).toFixed(2)}</span>`;
    }
  }
}
