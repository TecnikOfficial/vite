export function setupOverlays() {
  // Function to open the overlay for services
  function openOverlay() {
    document.getElementById("table-overlay").style.display = "flex" // Show overlay
  }

  // Function to close the overlay for services
  function closeOverlay() {
    document.getElementById("table-overlay").style.display = "none" // Hide overlay
  }

  // Function to open the projects overlay
  function openProjectsOverlay() {
    document.getElementById("projects-overlay").style.display = "flex" // Show overlay
  }

  // Function to close the projects overlay
  function closeProjectsOverlay() {
    document.getElementById("projects-overlay").style.display = "none" // Hide overlay
  }

  // Function to open the donation overlay
  function openDonationOverlay() {
    document.getElementById("donation-overlay").style.display = "flex" // Show overlay
  }

  // Function to close the donation overlay
  function closeDonationOverlay() {
    document.getElementById("donation-overlay").style.display = "none" // Hide overlay
  }

  // Function to close all overlays
  function closeAllOverlays() {
    closeOverlay() // Close services overlay
    closeProjectsOverlay() // Close projects overlay
    closeDonationOverlay() // Close donation overlay
  }

  // Add event listener to services button
  document.getElementById("button2").addEventListener("click", openOverlay)

  // Add event listener to the overlay to close it when clicking outside the content
  document.getElementById("table-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      closeOverlay() // Close the overlay
    }
  })

  // Add event listener to the projects button
  document.getElementById("button3").addEventListener("click", openProjectsOverlay)

  // Add event listener to the projects overlay to close it when clicking outside the content
  document.getElementById("projects-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      closeProjectsOverlay() // Close the overlay
    }
  })

  // Add event listener to the donation button
  document.getElementById("button4").addEventListener("click", openDonationOverlay)

  // Add event listener to the donation overlay to close it when clicking outside the content
  document.getElementById("donation-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      closeDonationOverlay() // Close the overlay
    }
  })

  // Make functions globally available
  window.openOverlay = openOverlay
  window.closeOverlay = closeOverlay
  window.openProjectsOverlay = openProjectsOverlay
  window.closeProjectsOverlay = closeProjectsOverlay
  window.closeAllOverlays = closeAllOverlays
  window.openDonationOverlay = openDonationOverlay
  window.closeDonationOverlay = closeDonationOverlay
}
