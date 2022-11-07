import { productData } from "./api-fetch-products.js";

const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");
const showAddedProducts = document.querySelector(".cart-content");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);


//visa sparade produkter från localstorage i kassan
export function showStoredProductsInCart() {
    if (localStorage.length == 0) {
        showAddedProducts.innerText = "No products added to cart yet!";
        showAddedProducts.style.textAlign = "center";
    }
    else {
        let contentContainer = document.createElement("div");
        contentContainer.classList.add("cart-box");
        let productContent = `
                <img src="#" alt="" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${title}</div>
                <div class="cart-price">${price}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
                </div>
                <i class="bi bi-trash cart-remove" title="delete from cart"></i>
                `;

        contentContainer.appendChild(productContent);
        showAddedProducts = productContent.innerHTML;
    }
}


//spara added product i localstorage
/*function storeProducts() {
    localStorage.setItem(addBtnClicked(), JSON.stringify(storeData));
    showStoredProductsInCart();
}

function addBtnClicked() {
    storeProducts();
}

/*
function addBtnClicked() {
    addBtn.addEventListener("click", storeProducts);
}
if (localStorage == !productData) {
    storeProducts();
}
else if (localStorage == productData) {
    alert("This product is already added to cart.");
}*/

//uppdatera antal och summa i kassa
//updateCart();*/
