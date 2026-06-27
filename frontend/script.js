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

// ===============================
// AtherGrid India Climate Map
// ===============================

const mapElement = document.getElementById("map");

if (mapElement) {

    const map = L.map("map").setView([22.9734, 78.6569], 5);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap & CARTO"
    }).addTo(map);

    // Current marker
let currentMarker = null;

// When user clicks on the map
map.on("click", function (e) {

    const lat = e.latlng.lat.toFixed(4);
    const lng = e.latlng.lng.toFixed(4);

    document.getElementById("location-name").textContent =
`Latitude: ${lat}, Longitude: ${lng}`;

    // Remove previous marker
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    // Create new marker
    currentMarker = L.marker([lat, lng]).addTo(map);

    currentMarker.bindPopup(`
        <b>Selected Location</b><br>
        Latitude: ${lat}<br>
        Longitude: ${lng}
    `).openPopup();

    // Temporary values (will come from Python later)
    document.getElementById("temperature").textContent = "-- °C";
    document.getElementById("rainfall").textContent = "-- mm";
    document.getElementById("humidity").textContent = "-- %";
    document.getElementById("risk").textContent = "Loading...";
});}