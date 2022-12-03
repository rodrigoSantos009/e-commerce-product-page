import { formatCurrency } from "./formatCurrency.js";

const numberItems = document.querySelector(".number-items");
const quantityCart = document.querySelector("#quantity-cart");
const openCart = document.querySelector("#open-cart");
const cart = document.querySelector("#cart");
const deleteItems = document.querySelector(".delete-items");
let valueItem = document.querySelector(".value-item");
const totalItems = document.querySelector(".total-items");
const totalValue = document.querySelector(".total-value");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const btnAddCart = document.querySelector("#btn-add-cart");
let quantityItem = document.querySelector(".quantity-item");
const emptyCart = document.querySelector(".empty-cart");
const itemsCart = document.querySelector("#items");
let total = 0;

let cartItems = false;

const addToCart = () => {
  if(quantityItem.value > 0) {
    valueItem = 125;
    totalItems.innerHTML = quantityItem.value;
    valueItem *= parseInt(quantityItem.value);
    totalValue.innerHTML = formatCurrency(valueItem);
    addNumberItems();
    showItems();
  }
};


const addNumberItems = () => {
  if (quantityItem.value > 0) {
    quantityCart.style.display = "flex";
    numberItems.innerHTML = quantityItem.value;
    cartItems = true;
  } 
};

const showItems = () => {
  if (cartItems) {
    emptyCart.style.display = "none";
    itemsCart.style.display = "flex";
  } 
};

const clear = () => {};

deleteItems.addEventListener('click', () => {
  emptyCart.style.display = "flex";
  itemsCart.style.display = "none";
  quantityCart.style.display = "none";
})

btnAddCart.addEventListener("click", () => {
  addToCart();
});

openCart.addEventListener("click", () => {
  cart.classList.toggle("open-cart");
});

minus.addEventListener("click", () => {
  if (quantityItem.value > 0) {
    total -= 1;
    quantityItem.value = total;
  }
});

plus.addEventListener("click", () => {
  total += 1;
  quantityItem.value = total;
});
