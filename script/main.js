"use strict";

//Kod för att hämta produktdata från ett api
let productData = fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json();
    })
    .then((productData) => {
        showProductCards(productData);
    })
    .catch((error) => console.error(error));


//Funktion för att visa produkterna på webbsidan
const productCards = document.querySelector('.shop-content');
function showProductCards(productData) {
    let outputBox = "";
    let id = 1;
    productData.map(data => {
        id++;
        outputBox += `   
        <div data-id="${id}" class="product-box">
        <p class="product-category">${data.category}</P>
        <img src="${data.image}" id="${data.image}" alt="product-img" title="click to view large image" class="product-img">
        <h2 data-id="${data.title}" class="product-title">${data.title}</h2>
        <p class="card-text">${data.description}</p>
        <span data-id="${data.price}" class="price">${data.price} kr</span>
        <i class="bi bi-cart-plus add-cart" title="add to cart"> add</i>
        </div>`;
    });
    productCards.innerHTML = outputBox;
};


/*
document.querySelectorAll(".add-cart");
addBtn.forEach.onclick = () => {
    addBtn
    console.log();

}
/*
for (let i = 0; i < addBtn.length; i++) {
    let cartBtn = addBtn[i];
    cartBtn = addEventListener("click", () => {
    });
}
/*

/*
function addBtnProductInfo(productData) {
    productData = () => {
        for (let i = 0; i < data.length; i++) {
            let productInfo = data[i];
            addBtn.contain(productInfo);
            console.log(productInfo);
        }
    };
}

//spara produkter i localStorage
for (let i = 0; i < addBtn.length; i++) {
    let cartBtn = addBtn[i];
    cartBtn = addEventListener("click", () => {
        console.log(cartBtn);
    });
}

*/

/*
let productImage = document.querySelectorAll(".product-img");

document.querySelectorAll(".product-img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".view-large-img").style.display = "block";
        document.querySelector(".view-large-img img").src = img.getAttribute("src");
    }
});*/

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


/*
//visa sparade produkter från localstorage i kassan
const showAddedProducts = document.querySelector(".cart-content");
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


//Knapp för att visa alla produkter, eller olika produktkategorier 
const categoryBtn = document.getElementById("dropdownMenuButton1");
const categoryMenu = document.querySelector(".dropdown-menu-container");
const mensClothingCategory = document.getElementById("m-clothing");
const womansClothingCategory = document.getElementById("m-clothing");
const jeweleryCategory = document.getElementById("jewelery");
const electronicsCategory = document.getElementById("electronics");
const showAllCategory = document.getElementById("show-all");

let toggleclick = 1;
categoryBtn.style.border = "none";

function toggleCategoryMenu () {
    if(toggleclick == 1){
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



