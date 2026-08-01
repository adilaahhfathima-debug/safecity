document.addEventListener("DOMContentLoaded", () => {

    const reportBtn = document.getElementById("reportBtn");

    reportBtn.addEventListener("click", () => {
        window.location.href = "report.html";
    });

});

    // Feature Card Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseover", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "translateY(0)";
        });

    });

});
