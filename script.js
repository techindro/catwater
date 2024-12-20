# JavaScript file for interactivity

// Get the cat element
const gato = document.getElementById('gato');
let position = 0; // Initial position of the cat

// Function to move the cat
function moveCat() {
    position += 2; // Move the cat 2 pixels to the right
    if (position > window.innerWidth) {
        position = -507.5; // Reset position if it goes off screen
    }
    gato.style.transform = `translateX(${position}px)`; // Update the cat's position
}

// Call the moveCat function every 50 milliseconds
setInterval(moveCat, 50);