"use strict";

//Kod för att hämta limited produktdata från api till startsidan
fetch('https://fakestoreapi.com/products?limit=5')
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
};

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
};

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
};

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
};

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
};

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
};


/*

//spara produkter i localStorage
function store() {
    let img, title, price, id;

    const product = {
        img: img,
        title: title,
        price: price,
        id: id,
    }
    localStorage.setItem(product, JSON.stringify(product));
}

*/

/*
let productImages = document.querySelectorAll(".product-img");

productImages.forEach(img => {
    img.onclick = () => {
        document.querySelector(".view-large-img").style.display = "block";
        document.querySelector(".view-large-img img").src = img.getAttribute("src");
    }
});*/
/*
//Funktion för att visa produktbilder i stor vy på webbsidan, efter klick av vald produktbild
let view = document.querySelector(".view-large-img");
let productImage = document.getElementsByClassName(".product-img");
let viewImage = document.querySelectorAll(".view-img");

function viewLargeImg(productData) {
    let outputBox = "";
    productData.map(data => {
            outputBox += `   
            <i class="bi bi-x close-large-view" title="Close"></i>
            <img src="${data.image}" alt="img-product">
            `;
        });
        viewImage.forEach(image => {
            image.addEventListener("click", () => {
                view.style.display = "block";
                viewImage.src = image.getAttribute("src");
                view.innerHTML = outputBox;
            });
        
        });
}
*/

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


//visa sparade produkter från localstorage i kassan
const showAddedProducts = document.querySelector(".cart-content");
export function showStoredProductsInCart() {
    let id;
    if (localStorage.length == 0) {
        showAddedProducts.innerText = "No products added to cart yet!";
        showAddedProducts.style.textAlign = "center";
    }
    else {
        Object.keys(localStorage).forEach(function (key) {
            id = localStorage.getItem(key);
            let productContent = `
                <div class="cart-box">
                <img src="${id.image}" alt="${id.title}" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${id.title}</div>
                <div class="cart-price">${id.price}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
                </div>
                <button type="button"><i data-id="${id.id}" class="bi bi-trash cart-remove" title="delete from cart"></i></button>
                </div>
                `;
            showAddedProducts.innerHTML = productContent;
        });
    }
}

/*
//showStoredProductsInCart();

//spara produkter i localStorage
function storeProductOnAddClicked(e) {
    let button = e.target;
    let product = button.parentElement.innerText;
    localStorage.setItem(product, JSON.stringify(product));
}

console.log(localStorage);

let buttonList = document.getElementsByClassName('add-cart');
buttonList.addEventListener("click", (e) => {
    for (let i = 0; i < buttonList.length; i++) {
        console.log(e[i].target.id);
    }
});

//skapa update()- totalpris i cart funktion


//rensa all sparad data i localStorage
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", clearLocalStorageAndCart);

function clearLocalStorageAndCart() {
    if (confirm("All products in your cart will be deleted, are you sure?")) {
        localStorage.clear();
    }
}

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


