"use strict";

import * as PostPutDeleteRequests from "./jsonPlaceholder.js";

//Kod för att hämta limited produktdata från api till startsidan
fetch("https://fakestoreapi.com/products?limit=6")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    limitedProductCards(products);
  })
  .catch((error) => console.error(error));

//Knappar och funktioner för att visa alla produkter, eller olika produktkategorier
const categoryBtn = document.getElementById("dropdownMenuButton1");
const categoryMenu = document.querySelector(".dropdown-menu-container");

let toggleclick = 1;
function toggleCategoryMenu() {
  if (toggleclick == 1) {
    categoryMenu.style.display = "block";
    categoryBtn.style.border = "2px solid var(--text-logo)";
    toggleclick = 0;
  } else {
    categoryMenu.style.display = "none";
    categoryBtn.style.border = "none";
    toggleclick = 1;
  }
}

categoryBtn.addEventListener("click", toggleCategoryMenu);

categoryBtn.addEventListener("mouseover", function () {
  categoryBtn.style.boxShadow = "0px 0px 5px rgb(0, 202, 209)";
});
categoryBtn.addEventListener("mouseout", function () {
  categoryBtn.style.boxShadow = "none";
});

const shopTitle = document.querySelector(".section-title");
let dropdownBtns = document.querySelectorAll(".dropdown-item");
dropdownBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget == dropdownBtns[0]) {
      toggleCategoryMenu();
      //Kod för att hämta alla produktdata från api
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          showAllProductCards(products);
          shopTitle.textContent = "All Products";
        })
        .catch((error) => console.error(error));
    } else if (e.currentTarget == dropdownBtns[1]) {
      toggleCategoryMenu();
      //Kod för att hämta category Women´s-clothing produkter från api
      fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          showWomensCategory(products);
          shopTitle.textContent = `Products - Women's Clothing`;
        })
        .catch((error) => console.error(error));
    } else if (e.currentTarget == dropdownBtns[2]) {
      toggleCategoryMenu();
      //Kod för att hämta category men´s-clothing produkter från api
      fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          showMensCategory(products);
          shopTitle.textContent = `Products - Men's Clothing`;
        })
        .catch((error) => console.error(error));
    } else if (e.currentTarget == dropdownBtns[3]) {
      toggleCategoryMenu();
      //Kod för att hämta category jewelery från api
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          showJeweleryCategory(products);
          shopTitle.textContent = `Products - Jewelery`;
        })
        .catch((error) => console.error(error));
    } else if (e.currentTarget == dropdownBtns[4]) {
      toggleCategoryMenu();
      //Kod för att hämta category electronics från api
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          showElectronicsCategory(products);
          shopTitle.textContent = `Products - Electronics`;
        })
        .catch((error) => console.error(error));
    }
  });
});

//Funktion för att visa alla produkterna på webbsidan
const productCards = document.querySelector(".shop-content");
function showAllProductCards(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
        <div class="product-box">
        <p class="product-category">${product.category}</P>
        <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <p class="card-text">${product.description}</p>
        <span class="price">${product.price} sek</span>
        <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
        </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa jewelery-produkterna på webbsidan
function showJeweleryCategory(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
        <div class="product-box">
        <p class="product-category">${product.category}</P>
        <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <p class="card-text">${product.description}</p>
        <span class="price">${product.price} sek</span>
        <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
        </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa electronics-produkterna på webbsidan
function showElectronicsCategory(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
            <div class="product-box">
            <p class="product-category">${product.category}</P>
            <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
            <h2 class="product-title">${product.title}</h2>
            <p class="card-text">${product.description}</p>
            <span class="price">${product.price} sek</span>
            <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
            </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa Men´s Clothing-produkter på webbsidan
function showMensCategory(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
        <div class="product-box">
        <p class="product-category">${product.category}</P>
        <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <p class="card-text">${product.description}</p>
        <span class="price">${product.price} sek</span>
        <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
        </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa Women´s Clothing-produkter på webbsidan
function showWomensCategory(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
        <div class="product-box">
        <p class="product-category">${product.category}</P>
        <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <p class="card-text">${product.description}</p>
        <span class="price">${product.price} sek</span>
        <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
        </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa endast 5-produkter på webbsidan
function limitedProductCards(products) {
  let outputBox = "";
  products.forEach((product) => {
    outputBox += `   
        <div class="product-box">
        <p class="product-category">${product.category}</P>
        <img src="${product.image}" alt="${product.title}" title="click to view large image" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <p class="card-text">${product.description}</p>
        <span class="price">${product.price} sek</span>
        <button type="button" id="${product.id}" title="add to cart" class="bi bi-cart-plus add-cart"> add</button>
        </div>`;
  });
  showCartCount();
  productCards.innerHTML = outputBox;
}

//Funktion för att visa produktbilder i stor vy på webbsidan, efter klick av vald produktbild
let view = document.querySelector(".view-large-img");
let viewImage = document.querySelector(".view-img");

productCards.addEventListener("click", (event) => {
  let img = event.target.closest(".product-img");
  if (!img || !productCards.contains(img)) {
    return;
  }
  viewImage.src = img.src;
  view.style.display = "block";
});

//Funktion för att stänga stor vy av produktbild
const closeView = document.querySelector(".close-large-view");
closeView.onclick = () => {
  view.style.display = "none";
};

//Funktioner för att öppna/stänga kassa
const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");

function openCart() {
  cart.classList.add("active");
  showStoredProductsInCart();
}
showCart.addEventListener("click", openCart);

function closeCart() {
  cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);

//spara produkter i localstorage vid klick add-to-cart
const showAddedProducts = document.querySelector(".cart-content");
productCards.addEventListener("click", (event) => {
  let addBtn = event.target.closest(".add-cart");
  let qty = 1;
  let product = {
    id: addBtn.id,
    image: addBtn.parentElement.children[1].src,
    title: addBtn.parentElement.children[2].innerText,
    price: addBtn.previousElementSibling.innerText,
    quantity: qty,
  };
  const productId = product.id;
  if (!addBtn || !productCards.contains(addBtn)) {
    return;
  } else if (localStorage.length == 0) {
    localStorage.setItem(productId, JSON.stringify(product));
    showStoredProductsInCart();
  } else {
    Object.keys(localStorage).forEach(function (key) {
      if (product.id == key) {
        alert(
          "This product is already added to your cart. If you want to select a different quantity of the product, visit your cart."
        );
      }
      localStorage.setItem(productId, JSON.stringify(product));
      showStoredProductsInCart();
    });
  }
});

//visa antal tillagda produkter i cart icon
export const cartCount = showCart.querySelector("span");
export function showCartCount() {
  let count = 0;
  Object.keys(localStorage).forEach(function (key) {
    let product = JSON.parse(localStorage.getItem(key));
    if (product == null) {
      count = 0;
      return;
    }
    count = count + product.quantity;
    cartCount.innerText = count;
  });
}

//funktion för att uppdatera totalpriset i kassan
export const totalPrice = document.querySelector("#total-price span");
export function updateTotalPrice() {
  let total = 0;
  let product;
  Object.keys(localStorage).forEach(function (key) {
    product = JSON.parse(localStorage.getItem(key));
    let price = parseFloat(product.price);
    total += price * product.quantity;
    totalPrice.innerHTML = total.toFixed(2);
  });
}

//Funktion för att ändra produktantalet
showAddedProducts.addEventListener("click", (event) => {
  let qty = event.target.closest(".cart-quantity");
  let cartProductId = qty.parentElement.nextElementSibling.id;

  if (!cartProductId) {
    return;
  } else if (qty.value < 1) {
    qty.value = 1;
    return alert("invalid quantity selection..");
  } else {
    Object.keys(localStorage).forEach(function (key) {
      let product = JSON.parse(localStorage.getItem(key));
      if (cartProductId == key) {
        product.quantity = Number(qty.value);
        localStorage.setItem(key, JSON.stringify(product));
        showStoredProductsInCart();
      }
    });
  }
});

//visa sparade produkter från localstorage i kassan
export function showStoredProductsInCart() {
  let content = "";
  let product;
  if (localStorage.length !== 0) {
    Object.keys(localStorage).forEach(function (key) {
      product = JSON.parse(localStorage.getItem(key));
      let title = product.title.slice(0, 25) + "..";
      content += `
                <div class="cart-box">
                <img src="${product.image}" alt="${product.title}" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${title}</div>
                <div class="cart-price">${product.price}</div>
                <input name="quantity" title="select quantity" value="${product.quantity}" type="number" class="cart-quantity">
                </div>
                <button type="button" id="${product.id}" class="bi bi-trash cart-remove" title="delete from cart"></button>
                </div>
                `;
    });
    showAddedProducts.innerHTML = content;
    updateTotalPrice();
    showCartCount();
  } else {
    showAddedProducts.innerText = "No products added to your cart yet.";
    totalPrice.innerHTML = 0;
    cartCount.innerText = 0;
  }
}

//funktion för att ta bort produkter från kassan
showAddedProducts.addEventListener("click", (event) => {
  let removeBtn = event.target.closest(".cart-remove");
  if (!removeBtn || !showAddedProducts.contains(removeBtn)) {
    return;
  } else {
    Object.keys(localStorage).forEach(function (key) {
      let product = JSON.parse(localStorage.getItem(key));
      if (removeBtn.id == product.id) {
        localStorage.removeItem(key);
        showStoredProductsInCart();
      }
    });
  }
});

//rensa all sparad data i localStorage
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", clearLocalStorageAndCart);

function clearLocalStorageAndCart() {
  if (confirm("All products in your cart will be removed, are you sure?")) {
    localStorage.clear();
    showStoredProductsInCart();
    totalPrice.innerHTML = 0;
    cartCount.innerText = 0;
  }
}

//Funktion för att visa arrow-up vid företagsnamn när man scrollar ner på webbsidan.
window.addEventListener("scroll", () => {
  const scrolls = window.scrollY;
  let arrow = document.querySelector(".bi-arrow-up");
  if (scrolls >= 700) {
    arrow.classList.add("active");
  } else if (scrolls < 700) {
    arrow.classList.remove("active");
  }
});

//händelsehanterare som tar in ett användarnamn om kassan är tom när sidan laddas om
let cartTitle = document.querySelector(".cart-title");
let userName = "";
window.onload = () => {
  if (localStorage.length == 0) {
    userName = prompt("Welcome! Please enter your name:");
    if (userName === null || userName === "") {
      cartTitle.innerHTML = `YOUR CART`;
    } else {
      cartTitle.innerHTML = `Welcome to YOUR CART ${userName}`;
    }
  }
};
