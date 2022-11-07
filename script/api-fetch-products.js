import { showStoredProductsInCart } from "./handleCart.js";

const productCards = document.querySelector('.shop-content');
let outputBox = "";
let addBtn;

//Kod för att hämta data/information om produkterna från ett api och visa dem på sidan
export let productData = fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(productData => {
        for (let i = 0; i < productData.length; i++) {
            let productId = productData[i].id;
            let beerProductName = productData[i].name;
            let price = Math.floor(Math.random() * 100);
            let productImage = productData[i].image_url;
            let productDescription = productData[i].description;
            let tips = productData[i].brewers_tips;
            addBtn = productId;
            outputBox += `   
            <div class="product-box">
            <img src="${productImage}" alt="" class="product-img">
            <h2 data-id="${beerProductName}" class="product-title">${productId + ". " + beerProductName}</h2>
            <p class="card-text">${productDescription}</p>
            <button id="btn-more-info" type="button" class="btn btn-secondary me-3">
            More info
            </button>
            <span data-id="${price}" class="price">${price} kr</span>
            <i data-id="${addBtn}" class="bi bi-cart-plus add-cart" title="add to cart"> add</i>
            </div>`;
        }
        productCards.innerHTML = outputBox;
    });

let count = 0;
let sum = 0;

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}

if (localStorage.getItem("productData")) {
    productData = JSON.parse(localStorage.getItem("productData"));
}

let addBtns = document.querySelectorAll(".add-cart");
console.log(addBtns.length);

for (let i = 0; i < addBtns.length; i++) {
    let btn = addBtns[i];
    btn.addEventListener("click", add);
    btn.dataset.id;
}

function add(event) {
    let price = Number(event.target.dataset.price);
    console.log(event)
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

    if (id in productData) {
        productData[id].qty++;
    } else {
        let cartItem = {
            title: title,
            price: price,
            qty: 1
        };
        productData[id] = cartItem
    }

    count++;
    sum += price;

    console.log(productData);
    localStorage.setItem("productData", JSON.stringify(productData));
    updateCart();
    showStoredProductsInCart();
}

function updateCart() {
    document.getElementById("total-price").innerText = sum;
    document.querySelectorAll("cart-quantity").innerText = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}

/*
const showCartCountNav = document.querySelector(".cart-icon");

function cartCount () {
let prdCount = localStorage.getItem("cartsCount");
prdCount = parseInt(prdCount);
if (prdCount) {
    localStorage.setItem("cartsCount", prdCount + 1);
    showCartCountNav.textContent = prdCount + 1;
}
else {
    localStorage.setItem("cartsCount", 1);
    showCartCountNav.textContent = prdCount = 1;
}
}

function displayCart () {
let prdCount = localStorage.getItem("cartsCount");
if (prdCount) {
showCartCountNav.textContent = prdCount;
}   
}
displayCart();
*/

//skapat knapp för att visa alla produkter 
const showAllBtn = document.getElementById("show-all");
showAllBtn.addEventListener("mouseover", function () {
    showAllBtn.style.color = "rgb(0, 202, 209)";
});
showAllBtn.addEventListener("mouseout", function () {
    showAllBtn.style.color = "black";
});



