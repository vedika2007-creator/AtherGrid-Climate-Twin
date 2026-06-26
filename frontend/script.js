// ===============================
// AtherGrid JavaScript
// ===============================

console.log("Welcome to AtherGrid!");

// -------------------------------
// Launch Dashboard Button
// -------------------------------

const launchButton = document.querySelector(".primary-btn");

if (launchButton) {
    launchButton.addEventListener("click", function () {
        alert("Launching AtherGrid Dashboard...");
    });
}

// -------------------------------
// Welcome Message
// -------------------------------

window.onload = function () {
    console.log("AtherGrid Loaded Successfully!");
};

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});