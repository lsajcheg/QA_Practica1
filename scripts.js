// Agregar una clase CSS a la tarjeta de producto cuando se hace clic en ella
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("selected");
        });
    });
});
