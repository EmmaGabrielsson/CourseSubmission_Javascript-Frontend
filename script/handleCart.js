import * as api from "./api-fetch-products.js";

const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");
const removeFromCart = document.querySelectorAll(".cart-remove");
const addToCart = document.querySelectorAll(".add-cart");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);

/*
function updateCart() {
    for (let i = 0; i < removeFromCart.length; i++) {
        let btn = removeBtns[i];
        btn.classList.addEventListener("click", removeItemsFromCart);
    }
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    for (let i = 0; i < addToCart.length; i++) {
        let btn = addToCart[i];
        btn.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyBtnCliked);
}

function buyBtnCliked() {
    alert("Your order is placed");
    let cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotalPrice();
}

function removeItemsFromCart(event) {
let clickedremoveBtn = event.target;
clickedremoveBtn.parentElement.remove();
updateTotalPrice();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotalPrice();
}

function addCartClicked(event) {
    let btn = event.target;
    let shopProducts = btn.parentElement;
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImage = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImage);
    updateTotalPrice();
}

function addProductToCart(title, price, productImage) {
    let cartProduct = document.createElement("div");
    cartProduct.classList.add("cart-box");
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let productNames = cartContent.getElementsByClassName("cart-product-title")[0];
    for (let i = 0; i < productNames.length; i++) {
        alert("You have already add this product to your cart.");
        return;
    }
}

let cartProductContent = `
    <img src="${productImage}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-title-product">${title}</div>
        <div class="cart-price">${price}</div>
        <label for="quantity">Antal</label>
        <input name="quantity" title="add to cart" type="number" value="1" class="cart-quantity">
    </div>
    <i class="bi bi-trash cart-remove" title="delete from cart"></i>`;
cartProduct.innerHTML = cartProductContent;
cartProduct.append(cartProduct);
cartProduct.getElementsByClassName("cart-remove")[0].addEventListener("click", removeItemsFromCart);
cartProduct.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);


function updateTotalPrice() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let productBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < productBoxes.length; i++) {
        let productBox = productBoxes[i];
        let productPrice = cartbox.getElementsByClassName("cart-price")[0];
        let productQuantity = productBox.getElementsByClassName("cart-quantity")[0];
        let price = parsefloat(productPrice.innerText.replace("", " kr"))
        let quantity = productQuantity.value;
        total = total + (price * quantity);
    }
    total = Math.round(total *100) /100;
    document.getElementsByClassName("total-price")[0].innerText = total + " kr";
}

*/

