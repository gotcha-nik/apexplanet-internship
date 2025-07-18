function showMessage() {
  alert("Thanks for checking out my page! Feel free to connect on LinkedIn.");
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "") {
    alert("Please fill in all required fields: Name and Email.");
    return; // Stop form submission
  }

  // Email format validation (basic)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If everything is valid
  alert("Form submitted successfully!\nThank you, " + name + ".");
  
  // Optionally, reset the form
  document.getElementById("contactForm").reset();
});

function openImage(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}
