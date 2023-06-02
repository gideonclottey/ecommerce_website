// Get the overlay element
const overlay = document.querySelector('.overlay');

// Get the button element
const showOverlayBtn = document.getElementById('showOverlayBtn');

// Add a click event listener to the button
showOverlayBtn.addEventListener('click', function() {
  // Toggle the display of the overlay
  overlay.style.display = 'block';
});
