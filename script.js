// script.js

// Function to change the background color of the header
function changeHeaderColor() {
  var header = document.querySelector(".header");
  header.style.backgroundColor = "violet";
}

// Function to handle a button click event
function handleButtonClick() {
  var button = document.querySelector("#myButton");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
}

// Call the functions

displayWelcomeMessage(); // Display a welcome message when the page loads

changeHeaderColor(); // Change the background color of the header to pink

handleButtonClick(); // Add a click event listener to the button with ID "myButton" and display an alert when clicked

