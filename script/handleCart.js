import * as api from "./api-fetch-products.js";

const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");
const addToCart = document.querySelectorAll(".add-cart");
const showAddedProducts = document.getElementsByClassName("cart-content");
const removeFromCart = document.querySelectorAll(".cart-remove");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);

function storeProducts() {
    localStorage.setItem(productData[i].id, JSON.stringify(productData[i]));
}
addToCart.onsubmit = storeProducts;

function showStoredProductsInCart() {
    let productId;
    if (localStorage.length !== 0){
        Object.keys(localStorage).forEach(function (key) {
            productId = localStorage.getItem(key);
            let img = addToCart.elementSibling(".product-img");
            let title = addToCart.elementSibling(".product-title");
            let price = addToCart.elementSibling(".price");
            let productContent = `
            <img src="${img}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-title-product">${title}</div>
                <div class="cart-price">${price}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
            </div>
            <i class="bi bi-trash cart-remove" title="delete from cart"></i>`;

            let contentContainer = document.createElement("div");
            contentContainer.classList.add("cart-box");
            contentContainer.appendChild(productContent);
            showAddedProducts = productContent.innerHTML;
            });
    }
    else {
        showAddedProducts.innerText = "No products added to cart yet.";
    }
}



