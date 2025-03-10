const imageContainer = document.getElementById("bouncing-image");

// Liste der Bilder mit Sponsortyp
const images = [
    { src: "images/gold/gold1.png", sponsortype: "gold" },
    { src: "images/gold/gold2.png", sponsortype: "gold" },
    { src: "images/gold/gold3.png", sponsortype: "gold" },
    { src: "images/silver/silver1.png", sponsortype: "silver" },
    { src: "images/silver/silver2.png", sponsortype: "silver" },
    { src: "images/platinum/adcubum.svg", sponsortype: "platinum" },
    { src: "images/platinum/mimacom.png", sponsortype: "platinum" }
];

// Indizes für die Bilder
let goldIndex = 0;
let silverIndex = 0;
let platinumIndex = 0;

// Ablaufsteuerung in der Animation
let currentSponsortype = "gold";
function updateImage(newSrc, sponsorType) {
    const imageContainer = document.getElementById("bouncing-image");
    if (imageContainer) {
        imageContainer.className = sponsorType;
        imageContainer.src = newSrc + "?" + new Date().getTime(); // Cache-busting
    } else {
        console.error("Image container not found!");
    }
}

// Funktion für "gold"-Sponsoren
function changeImageGold() {
    const goldImages = images.filter(image => image.sponsortype === "gold");
    updateImage(goldImages[goldIndex].src, "gold-style" );
    if (goldIndex === goldImages.length - 1) {
        currentSponsortype = "silver"; // Als Nächstes aufrufen}
    }
    goldIndex = (goldIndex + 1) % goldImages.length; // Index zyklisch erhöhen
}

// Funktion für "silver"-Sponsoren
function changeImageSilver() {
    const silverImages = images.filter(image => image.sponsortype === "silver");
    updateImage(silverImages[silverIndex].src ,"silver-style");
    if (silverIndex === silverImages.length - 1) {
        currentSponsortype = "platinum";
    }// Als Nächstes aufrufen}
    silverIndex = (silverIndex + 1) % silverImages.length; // Index zyklisch erhöhen

}



function changeImagePlatinum() {
    const platinumImages = images.filter(image => image.sponsortype === "platinum");
    updateImage(platinumImages[platinumIndex].src ,"platinum-style");
    const imageContainer = document.getElementById("bouncing-image");
    if (platinumIndex === platinumImages.length - 1) {
        currentSponsortype = "gold";
    }
    platinumIndex = (platinumIndex + 1) % platinumImages.length; // Index zyklisch erhöhen

}

// Hauptfunktion zum Steuern der Sequenz
function changeImageSequentially() {
    if (currentSponsortype === "gold") {
        changeImageGold();
    } else if (currentSponsortype === "silver") {
        changeImageSilver();
    } else if (currentSponsortype === "platinum") {
        changeImagePlatinum();
    }
}

// Starte die Animation alle 5 Sekunden
changeImageSequentially()
setInterval(changeImageSequentially, 2000);