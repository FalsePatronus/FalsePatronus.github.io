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

// script.js

// Function to handle the click event of the "here" hyperlinks
function handleHyperlinkClick(event) {
  event.preventDefault(); // Prevent the default hyperlink behavior

  var url = this.getAttribute("href"); // Get the URL from the hyperlink's href attribute
  var subpage = window.open(url, "_blank", "width=800,height=600,top=100,left=100,resizable=yes"); // Open the subpage in a new floating window
  subpage.focus(); // Focus on the new window
}

// Function to attach the click event handler to the "here" hyperlinks
function attachHyperlinkClickEvent() {
  var hyperlinks = document.querySelectorAll(".box a");
  hyperlinks.forEach(function(hyperlink) {
    hyperlink.addEventListener("click", handleHyperlinkClick);
  });
}

// Call the function to attach the click event handler to the hyperlinks
attachHyperlinkClickEvent();

