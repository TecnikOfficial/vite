export function setupDonation() {
  // Function to handle donation
  function handleDonation(url) {
    // Create a temporary message element
    const messageElement = document.createElement("div")
    messageElement.style.position = "fixed"
    messageElement.style.top = "40%"
    messageElement.style.left = "50%"
    messageElement.style.transform = "translate(-50%, -50%)"
    messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    messageElement.style.color = "white"
    messageElement.style.padding = "20px"
    messageElement.style.borderRadius = "10px"
    messageElement.style.zIndex = "200" // Ensure it's above other elements
    messageElement.style.fontSize = "1.5rem" // Increase font size
    messageElement.style.fontWeight = "bold" // Make text bold
    messageElement.innerText = "🤗Thanks so much for your support! It means a lot❤️"

    // Set width for mobile view
    if (window.innerWidth < 768) {
      messageElement.style.width = "70%" // Set width to 90% for mobile
    } else {
      messageElement.style.width = "450px" // Set a fixed width for larger screens
    }

    // Append the message to the body
    document.body.appendChild(messageElement)

    // Redirect after 2 seconds
    setTimeout(() => {
      window.open(url, "_blank") // Open the URL in a new tab
      document.body.removeChild(messageElement) // Remove the message after redirect
    }, 2000) // 2000 milliseconds = 2 seconds
  }

  // Function to open the donation overlay
  function openDonationOverlay() {
    window.closeAllOverlays() // Close any active overlays
    document.getElementById("donation-overlay").style.display = "flex" // Show donation overlay
  }

  // Function to close the donation overlay
  function closeDonationOverlay() {
    document.getElementById("donation-overlay").style.display = "none" // Hide overlay
  }

  // Add event listener to the widget image to open the donation overlay
  document.querySelector(".widget-image").addEventListener("click", openDonationOverlay)

  // Add event listener to the donation overlay to close it when clicking outside the content
  document.getElementById("donation-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      closeDonationOverlay() // Close the overlay
    }
  })

  // Make functions globally available
  window.handleDonation = handleDonation
  window.openDonationOverlay = openDonationOverlay
  window.closeDonationOverlay = closeDonationOverlay
}
