const imageContainer = document.getElementById("bouncing-image");

// Liste der Bilder in ../images/gold
const images = [
    "../images/gold/gold1.png",
    "../images/gold/gold2.png",
    "../images/gold/gold3.png",
    "../images/gold/gold4.png"
];

let currentIndex = 0;

// Funktionswechsel der Bilder
function changeImage() {
    imageContainer.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Schleife zurück zum ersten Bild
}

// Start der ersten Ansicht
changeImage();

// Wechsel alle 5 Sekunden
setInterval(changeImage, 5000);