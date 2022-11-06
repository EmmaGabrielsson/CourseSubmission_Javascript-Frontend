import * as api from "./api-fetch-products.js";

const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");
const addToCart = document.querySelectorAll(".add-cart");
const showAddedProducts = document.querySelector(".cart-content");
const removeFromCart = document.querySelectorAll(".cart-remove");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);

function showStoredProductsInCart() {
    let productId;
    let storedProduct;
    if (localStorage.length == 0) {
        showAddedProducts.innerText = "No products added to cart yet!";
        showAddedProducts.style.textAlign = "center";
    }
    else {
        Object.keys(localStorage).forEach(function(key) {
            productId = localStorage.getItem(key);
            storedProduct = JSON.parse(productId);
            if (storeProducts) {
                let contentContainer = document.createElement("div");
                contentContainer.classList.add("cart-box");
                let productContent = `
                <img src="${storedProduct[1]}" alt="" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${storedProduct[2]}</div>
                <div class="cart-price">${storedProduct[3]}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
                </div>
                <i class="bi bi-trash cart-remove" title="delete from cart"></i>`;
                
                contentContainer.appendChild(productContent);
                showAddedProducts = productContent.innerHTML;
            }
        });
    }
}

function storeProducts() {
    localStorage.setItem(productData[i].id, JSON.stringify());
    showStoredProductsInCart();
}

addToCart.forEach.click = storeProducts;
showStoredProductsInCart();

