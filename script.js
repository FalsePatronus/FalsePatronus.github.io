// script.js

// Function to display a welcome message
function displayWelcomeMessage() {
  var message = "Welcome to Holy Spirit Integrated School!";
  alert(message);
}

// Function to change the background color of the header
function changeHeaderColor() {
  var header = document.querySelector(".header");
  header.style.backgroundColor = "pink";
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

