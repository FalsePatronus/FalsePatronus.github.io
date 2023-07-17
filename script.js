// script.js

// Function to display a welcome message when the page loads
function displayWelcomeMessage() {
  var welcomeMessage = "Welcome to Holy Spirit Integrated School!";
  var welcomeElement = document.createElement("h2");
  welcomeElement.textContent = welcomeMessage;
  
  var contentContainer = document.querySelector(".content");
  contentContainer.prepend(welcomeElement);
}

// Call the function
displayWelcomeMessage(); // Display a welcome message when the page loads
