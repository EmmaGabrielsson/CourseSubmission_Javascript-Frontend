import {showStoredProductsInCart} from "./main.js";

//skicka cart-content för köpet genom POST-request
document.querySelector(".btn-buy").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: 101,
            userName: "Emma",
            course: "Javascript-Frontend, POST-request",
            message: "I did it!",
            shoppingCart: localStorage,
            userId: 120,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json),
            alert(`Your order has been placed/posted to JSONPlaceholder server!`));
            localStorage.clear();
            showStoredProductsInCart();
});

//ändrar message i en PUT-request, dock kan inte samma id hittas då den inte kan spara min POST på servern. Se consoll för response.
document.querySelector(".btn-change").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'PUT-REQUEST',
            userName: "Emma",
            course: "Javascript-Frontend PUT-request",
            message: "This is the put request with a changed message.",
            shoppingCart: localStorage,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json)),
        alert(`Ändrar här message i en PUT-request, dock kan inte samma id hittas från min POST-request då den inte lagras på servern, men den uppdaterar en befintlig. Se consoll för response.`);
});


//Raderar min order i DELETE-requset på servern.
document.querySelector(".btn-delete").addEventListener("click", () => {
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then((response) => response.json())
.then((json) => console.log(json)),
alert(`Raderar min order från servern. Se consoll för response.`);
;
});
