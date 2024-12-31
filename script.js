// Add floating images dynamically
function generateFloatingImages() {
    const floatingImagesContainer = document.getElementById('floatingImages');

    // List of images you want to assign to the 5 floating image holders
    const images = [
        'images/image1.jpg',  // Image for the first floating holder
        'images/image2.jpg',  // Image for the second floating holder
        'images/image3.jpg',  // Image for the third floating holder
        'images/image4.jpg',  // Image for the fourth floating holder
        'images/image5.jpg'   // Image for the fifth floating holder
    ];

    // Loop through the images and create the floating image elements
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement('img');
        img.src = images[i]; // Use the images from the "images" folder
        img.classList.add('floating-image');
        img.style.top = `${Math.random() * 80}%`;  // Randomly place the image vertically
        img.style.left = `${Math.random() * 80}%`; // Randomly place the image horizontally

        // Add image to the container
        floatingImagesContainer.appendChild(img);

        // Add independent movement to each image
        floatImage(img);
    }
}

// Function to make images float independently with slight random movement
function floatImage(img) {
    const movementSpeed = Math.random() * 2 + 1; // Speed between 1s and 3s
    const directionX = Math.random() < 0.5 ? 1 : -1; // Random horizontal direction
    const directionY = Math.random() < 0.5 ? 1 : -1; // Random vertical direction

    setInterval(function() {
        let currentLeft = parseFloat(img.style.left);
        let currentTop = parseFloat(img.style.top);

        // Move image within boundaries
        let newLeft = currentLeft + directionX * movementSpeed;
        let newTop = currentTop + directionY * movementSpeed;

        // Keep image inside the screen boundaries
        if (newLeft < 0 || newLeft > 100) {
            img.style.left = `${Math.random() * 80}%`; // Randomly reset position if out of bounds
        } else {
            img.style.left = `${newLeft}%`;
        }

        if (newTop < 0 || newTop > 80) {
            img.style.top = `${Math.random() * 80}%`; // Randomly reset position if out of bounds
        } else {
            img.style.top = `${newTop}%`;
        }
    }, 100); // Update every 100ms
}

// Generate the floating images when the page loads
generateFloatingImages();
