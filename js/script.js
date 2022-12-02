import { formatCurrency } from "./formatCurrency.js";

const numberItems = document.querySelector('.number-items')
const quantityCart = document.querySelector('#quantity-cart')
const openCart = document.querySelector("#open-cart");
const cart = document.querySelector("#cart");
let valueItem = document.querySelector(".value-item");
const totalItems = document.querySelector(".total-items");
const totalValue = document.querySelector(".total-value");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const btnAddCart = document.querySelector("#btn-add-cart");
let quantityItem = document.querySelector(".quantity-item");
quantityItem.value = 0
let total = 0



















const addTotalItems = () => {
  formatCurrency()
}

const addToCart = () => {
  valueItem = 125
  totalItems.innerHTML = quantityItem.value
  valueItem *= parseInt(quantityItem.value)
  totalValue.innerHTML = formatCurrency(valueItem)
  addNumberItems();
}

const addNumberItems = () => {
  if(quantityItem.value > 0) {
    quantityCart.style.display = "flex";
    numberItems.innerHTML = quantityItem.value;
    
  }
}

const clear = () => {
  
}

btnAddCart.addEventListener('click', () => {
  addToCart()
})

openCart.addEventListener("click", () => {
  cart.classList.toggle('open-cart')
});

minus.addEventListener("click", () => {
  if(quantityItem.value > 0) {
    total -= 1;
    quantityItem.value = total
  }
})

plus.addEventListener('click', () => {
  total += 1
  quantityItem.value = total
})
