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