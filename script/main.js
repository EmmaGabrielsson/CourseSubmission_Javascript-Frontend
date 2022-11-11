"use strict";

//Kod för att hämta limited produktdata från api till startsidan
fetch('https://fakestoreapi.com/products?limit=6')
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
    }
    else {
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

let dropdownBtns = document.querySelectorAll(".dropdown-item");
dropdownBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget == dropdownBtns[0]) {
            toggleCategoryMenu();
            //Kod för att hämta alla produktdata från api
            fetch('https://fakestoreapi.com/products')
                .then((response) => {
                    return response.json();
                })
                .then((products) => {
                    showAllProductCards(products);
                })
                .catch((error) => console.error(error));
        }
        else if (e.currentTarget == dropdownBtns[1]) {
            toggleCategoryMenu();
            //Kod för att hämta category Women´s-clothing produkter från api
            fetch(`https://fakestoreapi.com/products/category/women's clothing`)
                .then((response) => {
                    return response.json();
                })
                .then(products => {
                    showWomensCategory(products);
                })
                .catch((error) => console.error(error));
        }
        else if (e.currentTarget == dropdownBtns[2]) {
            toggleCategoryMenu();
            //Kod för att hämta category men´s-clothing produkter från api
            fetch(`https://fakestoreapi.com/products/category/men's clothing`)
                .then((response) => {
                    return response.json();
                })
                .then(products => {
                    showMensCategory(products);
                })
                .catch((error) => console.error(error));
        }
        else if (e.currentTarget == dropdownBtns[3]) {
            toggleCategoryMenu();
            //Kod för att hämta category jewelery från api
            fetch('https://fakestoreapi.com/products/category/jewelery')
                .then((response) => {
                    return response.json();
                })
                .then(products => {
                    showJeweleryCategory(products);
                })
                .catch((error) => console.error(error));
        }
        else if (e.currentTarget == dropdownBtns[4]) {
            toggleCategoryMenu();
            //Kod för att hämta category electronics från api
            fetch('https://fakestoreapi.com/products/category/electronics')
                .then((response) => {
                    return response.json();
                })
                .then(products => {
                    showElectronicsCategory(products);
                })
                .catch((error) => console.error(error));
        }
    });
});


//Funktion för att visa alla produkterna på webbsidan
const productCards = document.querySelector('.shop-content');
function showAllProductCards(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa jewelery-produkterna på webbsidan
function showJeweleryCategory(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa electronics-produkterna på webbsidan
function showElectronicsCategory(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa Men´s Clothing-produkter på webbsidan
function showMensCategory(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa Women´s Clothing-produkter på webbsidan
function showWomensCategory(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa endast 5-produkter på webbsidan
function limitedProductCards(products) {
    let outputBox = "";
    products.forEach(product => {
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
    productCards.innerHTML = outputBox;
}

//Funktion för att visa produktbilder i stor vy på webbsidan, efter klick av vald produktbild
let view = document.querySelector(".view-large-img");
let viewImage = document.querySelector(".view-img");

productCards.addEventListener("click", (event) => {
    let target = event.target.closest(".product-img");
    if (!target || !productCards.contains(target)) {
        return;
    }
    viewImage.src = target.src;
    view.style.display = "block";
});

//Funktion för att stänga stor vy av produktbild
const closeView = document.querySelector(".close-large-view");
closeView.onclick = () => {
    view.style.display = "none";
}

//Funktioner för att öppna/stänga kassa
const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);


//spara produkter i localstorage vid klick add-to-cart
const showAddedProducts = document.querySelector(".cart-content");

productCards.addEventListener("click", (event) => {
    let target = event.target.closest(".add-cart");
    let product = target.parentElement.innerHTML;
    if (!target || !productCards.contains(target)) {
        return;
    }
    localStorage.setItem(product, JSON.stringify(product));
    showStoredProductsInCart();
    
    
    //updateTotalPrice();
    console.log("jaaa")
});

//visa sparade produkter från localstorage i kassan
let productBox = document.querySelector(".cart-box");

function showStoredProductsInCart() {
    let productId;
    if (localStorage.length !== 0)    {
        Object.keys(localStorage).forEach(function (key) {
            productId = localStorage.getItem(key);
            productId = JSON.parse(productId);

            console.log(productId);
            let content = `
            
            `;
            showAddedProducts.innerHTML= content;
        });
    }
    else {
        showAddedProducts.innerText = "No products added to your cart yet.";
    }
}


OBS lägg till event delegation i inlämningsfråga.
/*
function showStoredProductsInCart(product) {
    //Object.keys(localStorage).forEach(function (key) {
        for (let i = 0; i < localStorage.length; i++) {
            product = localStorage.key([i]);
            console.log(product)
            let productContent = localStorage.getItem(product);
            console.log(productContent);

            productContent = JSON.parse(productContent);
            showAddedProducts.innerHTML = productContent;
            
            console.log(productContent);
        }
    
        let productId = localStorage.getItem(key);
        console.log(productContent);
        if (localStorage == productId) {
            alert("This product is already added to your cart.")
        }
        else if (localStorage.length !== 0) {
            productContent+=
            
            /*`
                <div class="cart-box">
                <img src="${productId.image}" alt="${productId.title}" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${productId.title}</div>
                <div class="cart-price">${productId.price}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
                </div>
                <button type="button"><i id="${productId.id}" class="bi bi-trash cart-remove" title="delete from cart"></i></button>
                </div>
                `;
                showAddedProducts.innerHTML = productContent;
            }
            else {
                showAddedProducts.innerText = "No products added to your cart yet.";
            }
   // });
}
*/
//rensa all sparad data i localStorage
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", clearLocalStorageAndCart);

function clearLocalStorageAndCart() {
    if (confirm("All products in your cart will be removed, are you sure?")) {
        localStorage.clear();
        //showStoredProductsInCart();
    }
}

/*
//skapa update()- totalpris i cart funktion
function updateTotalPrice()
/*

//skicka cart-content för köpet genom post-function
const buyBtn = document.getElementById("btn-buy");
buyBtn.addEventListener("click", placeOrder);

function placeOrder() {
  alert("Your order has been placed.");
}*/


//Funktion för att visa arrow-up vid företagsnamn när man scrollar ner på webbsidan.
window.addEventListener("scroll", () => {
    const scrolls = window.scrollY;
    let arrow = document.querySelector(".bi-arrow-up");
    if (scrolls >= 700) {
        arrow.classList.add("active");
    }
    else if (scrolls < 700) {
        arrow.classList.remove("active");
    }
});