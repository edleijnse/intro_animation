// Container für das Bild
const imageContainer = document.getElementById("bouncing-image");

// Liste der Bilder mit Sponsortyp
const images = [
    { src: "images/gold/gold1.png", sponsortype: "gold" },
    { src: "images/gold/gold2.png", sponsortype: "gold" },
    { src: "images/gold/gold3.png", sponsortype: "gold" },
    { src: "images/silver/silver1.png", sponsortype: "silver" },
    { src: "images/silver/silver2.png", sponsortype: "silver" },
    { src: "images/platinum/adcubum.svg", sponsortype: "platinum" },
    { src: "images/platinum/mimacom.png", sponsortype: "platinum" },
];

// Indizes und Ablaufsteuerung der Sponsortypen
const sponsorTypes = ["gold", "silver", "platinum"];
let currentTypeIndex = 0; // Zeigt an, welcher Sponsortyp gerade angezeigt wird
const indices = {
    gold: 0,
    silver: 0,
    platinum: 0,
};

// Aktualisiert das Bild im Container
function updateImage(newSrc, className) {
    if (imageContainer) {
        imageContainer.className = className;
        imageContainer.src = `${newSrc}?${new Date().getTime()}`; // Cache-Busting
    } else {
        console.error("Image container not found!");
    }
}

// Funktion, um das nächste Bild eines bestimmten Sponsortyps anzuzeigen
function changeImageByType(type) {
    const typeImages = images.filter(image => image.sponsortype === type);
    if (typeImages.length === 0) return; // Falls keine Bilder vorhanden sind

    const currentIndex = indices[type];
    const nextImage = typeImages[currentIndex];

    // Bild aktualisieren
    updateImage(nextImage.src, `${type}-style`);
    // Sponsor-Typ für den nächsten Aufruf wechseln
    if (currentIndex === typeImages.length - 1){
        currentTypeIndex = (currentTypeIndex + 1) % sponsorTypes.length;
    }

    // Index erhöhen (zyklisch)
    indices[type] = (currentIndex + 1) % typeImages.length;
}

// Steuert die Sequenzierung der Sponsortypen
function changeImageSequentially() {
    const currentType = sponsorTypes[currentTypeIndex];

    // Sponsortyp-Bild wechseln
    changeImageByType(currentType);


}

// Starte die Animation alle 2 Sekunden
changeImageSequentially();
setInterval(changeImageSequentially, 4000);