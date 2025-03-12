# Sponsor Image Rotator
This project displays a sequence of sponsor images categorized into different sponsorship types (e.g., Gold, Silver, Platinum). The images rotate automatically at a set interval, and each category has individual styling.
## Project Structure
``` 
.
├── index.html         <- Main HTML file containing the image container
├── script.js          <- JavaScript logic for controlling the image rotation
├── styles.css         <- CSS for styling the different sponsor categories
├── images/            <- Folder containing sponsor images
└── README.md          <- Documentation for the project
```
## Features
- **Automatic Image Rotation:** Images from different categories (Gold, Silver, Platinum) are displayed sequentially.
- **Category-specific Styling:** Each image is assigned a CSS class based on its category.
- **Cache Busting:** Ensures fresh images are displayed by preventing caching during updates.
- **Scalable:** New sponsor categories or images can be added easily without changing the code.

## Installation
### Prerequisites
- A modern browser (e.g., Google Chrome, Firefox, Edge)
- (Optional) A local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Steps
1. **Clone the repository:**
``` bash
   git clone https://github.com/username/sponsor-image-rotator.git
   cd sponsor-image-rotator
```
1. **Open the HTML file:**
   Open the `index.html` file in your browser (by double-clicking it or using a development server).
2. **Adjustments:**
    - Add new sponsor images to the `/images` folder.
    - Update the `images` list in the `script.js` file to include new images:
``` javascript
     const images = [
         { src: "images/gold/new-gold-image.png", sponsortype: "gold" },
         { src: "images/silver/new-silver-image.png", sponsortype: "silver" },
         { src: "images/platinum/new-platinum-image.png", sponsortype: "platinum" },
     ];
```
## Adjusting Rotation Interval
- The default interval for rotating between images is **2 seconds**.
- You can change this interval by modifying the value in the `setInterval` function in the `script.js` file:
``` javascript
  setInterval(changeImageSequentially, 2000); // Interval in milliseconds
```
## Project Files
### `script.js`
- Contains the main logic to control the image rotation.
- Includes configurable parameters (image paths, sponsor types, etc.).

### `styles.css`
- Defines the CSS styles for sponsor categories (`.gold-style`, `.silver-style`, and `.platinum-style`).
- Example:
``` css
 .gold-style {
    border: 5px solid gold;
    animation: bounceGold 6s infinite ease-in-out;
}

.silver-style {
    border: 5px dashed silver;
    animation: bounceSilver 4s infinite ease-in-out;
}

.platinum-style {
    border: 5px solid violet;
    animation: bouncePlatinum 8s infinite ease-in-out;
}
```
### `images/`
- Stores image files sorted into categories:
``` 
  images/
  ├── gold/
  │   ├── gold1.png
  │   ├── gold2.png
  │   └── gold3.png
  ├── silver/
  │   ├── silver1.png
  │   └── silver2.png
  └── platinum/
      ├── adcubum.svg
      └── mimacom.png
```
## Customization for Developers
- Images and categories can be easily added or changed by editing the `images` constant in `script.js`.
- To change the order in which sponsor types are displayed, modify the `sponsorTypes` array:
``` javascript
  const sponsorTypes = ["platinum", "gold", "silver"]; // Example of a new order
```
## Suggestions for Improvements
- **Dynamic Loading:** Implement a backend to load images and categories from a database.
- **Animated Transitions:** Use CSS animations for smoother image transitions.
- **Configuration File:** Manage values like `sponsorTypes` and image paths in a separate JSON file.

## License
This project is licensed under the **MIT License**. For more details, see the `LICENSE` file.
Enjoy working with the Sponsor Image Rotator! 😊
