// Get the button element
const toggleButton = document.getElementById('toggleButton');

// Add an event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the dark mode class on the document body
  document.body.classList.toggle('dark-mode');
});
