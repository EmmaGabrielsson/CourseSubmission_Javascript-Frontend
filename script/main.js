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
}

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
//let quantity = document.querySelectorAll(".cart-quantity").values;
let shoppingList = [];

productCards.addEventListener("click", (event) => {
    let addBtn = event.target.closest(".add-cart");
    let product = {
        id: addBtn.id,
        image: addBtn.parentElement.children[1].src,
        title: addBtn.parentElement.children[2].innerText,
        price: addBtn.previousElementSibling.innerText,
        quantity: 1,
    }
    if (!addBtn || !productCards.contains(addBtn)) {
        return;
    }
    if (JSON.parse(localStorage.getItem("shoppingList")) === null) {
        shoppingList.push(product);
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        window.location.reload();
    }
    else {
        const localList = JSON.parse(localStorage.getItem("shoppingList"))
        localList.map(data => {
            if (product.id == data.id) {
                shoppingList.quantity = data.quantity + 1;
            }
            else {
                shoppingList.push(data);
            }
        });
        shoppingList.push(product);
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        window.location.reload();
    }
});

//visa antal tillagda produkter i cart icon
const cartCount = showCart.querySelector("span");
let count = 0;
function showCartCount() {
    if (JSON.parse(localStorage.getItem("shoppingList")) == null) {
        return;
    }
    JSON.parse(localStorage.getItem("shoppingList")).map(data => {
        count = count + data.quantity;
    });
    cartCount.innerText = count;
}
showCartCount();

//funktion för att uppdatera totalpriset i kassan
const totalPrice = document.querySelector("#total-price span");
function updateTotalPrice() {
    let total = 0;
    let product;
    Object.keys(localStorage).forEach(function (key) {
        product = JSON.parse(localStorage.getItem(key));
        for (let i = 0; i < product.length; i++) {
            total += parseFloat(product[i].price) * product[i].quantity;
        }
        totalPrice.innerHTML = total;
    });
};
updateTotalPrice();
/*
function quantityCount() {
    showAddedProducts.addEventListener("click", (event) => {
        let qty = event.target.closest(".cart-quantity").value;
        let totalQty, product;
        console.log(qty);
        if (qty <= 0) {
            //alert("invalid choice");
            qty = 1;
            showStoredProductsInCart();
        }
        qty = totalQty;
        JSON.stringify(qty);
        shoppingList.push(product.quantity = qty);

        totalQty += product[i].quantity;
    });
}
quantityCount();*/

//visa sparade produkter från localstorage i kassan
let productBox = document.querySelector(".cart-box");

function showStoredProductsInCart() {
    let product;
    let content = "";
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function (key) {
            product = JSON.parse(localStorage.getItem(key));
            for (let i = 0; i < product.length; i++) {
                let title = product[i].title.slice(0, 25) + "...";
                content += `
                    <div class="cart-box">
                    <img src="${product[i].image}" alt="${product[i].title}" class="cart-img">
                    <div class="detail-box">
                    <div class="cart-title-product">${title}</div>
                    <div class="cart-price">${product[i].price}</div>
                    <label class="label-quantity" for="quantity">Quantity</label>
                    <input name="quantity" title="select quantity" contenteditable="true" type="number" value="1"class="cart-quantity">
                    </div>
                    <button type="button" id="${product[i].id}" class="bi bi-trash cart-remove" title="delete from cart"></button>
                    </div>
                    `;

            }
        });
        showAddedProducts.innerHTML = content;
    }
    else {
        showAddedProducts.innerText = "No products added to your cart yet.";
        showAddedProducts.style.textAlign = "center";
    }
}


//funktion för att ta bort produkter från kassan
//function removeProduct() {
    showAddedProducts.addEventListener("click", (event) => {
        
        let removeBtn = event.target.closest(".cart-remove");
        Object.keys(localStorage).forEach(function (key) {
            let product;
            product = JSON.parse(localStorage.getItem(key));
            for(let i= 0; i< product.length; i++) {
                console.log(product[i].id, removeBtn.id);
                if (removeBtn.id == product[i].id)
                
                localStorage.removeItem(product);
                showStoredProductsInCart();
                updateTotalPrice();


            }
        });
    });
//}

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
        showStoredProductsInCart();
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