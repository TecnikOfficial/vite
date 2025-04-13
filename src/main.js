// Array of text options
const textOptions = [
  "COMPUTER ENTHUSIAST",
  "GRAPHICS DESIGNER VFX",
  "A.i TECH EXPLORER 010",
  "WEB DESIGN + DEVELOPER",
  "PRIVACY FOCUSED MODE",
  "DIGITAL MUSIC CREATOR",
  "CASUAL GAMER GG + OG",
  "FREELANCE VIDEO EDITOR",
]

let currentTextIndex = 0 // Initialize index for text options

// Function to change the text
function changeText() {
  const textElement = document.getElementById("slider-text")

  // Check if we have more text options to display
  if (currentTextIndex < textOptions.length) {
    textElement.textContent = textOptions[currentTextIndex]
    currentTextIndex++ // Move to the next text option
  } else {
    currentTextIndex = 0 // Reset index if needed
  }
}

// Function to start the text display after loading
function startTextDisplay() {
  // Start changing text after a delay
  setInterval(changeText, 3000) // Change text every 3 seconds
}

// Modify the fadeOutLoadingScreen function to call startTextDisplay
function fadeOutLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen")
  loadingScreen.style.opacity = 0 // Start fading out
  setTimeout(() => {
    loadingScreen.style.display = "none" // Hide after fade out
    // Start displaying the initial text for 1 seconds after unblur
    setTimeout(() => {
      startTextDisplay() // Start displaying text options
    }, 400) // Keep initial text for 1 seconds after unblur
  }, 1500) // Match this duration with the CSS transition duration
}

// Year timer functionality
let currentYear = 1999
const yearTimerElement = document.getElementById("year-timer")
const totalYears = 2025 - 1999 + 1 // Include both 1999 and 2025
const durationPerYear = 4000 / totalYears // Total duration divided by number of years
const increasedDurationFor1999 = 900 // Increased duration for 1999 (1 seconds)

function updateYear() {
  yearTimerElement.textContent = currentYear

  // Smooth transition effect
  yearTimerElement.style.opacity = 1 // Fade in
  setTimeout(
    () => {
      yearTimerElement.style.opacity = 0 // Fade out
    },
    (currentYear === 1999 ? increasedDurationFor1999 : durationPerYear) - 30,
  ) // Fade out just before the year changes

  // Increment the year
  if (currentYear < 2025) {
    // Schedule the next update
    setTimeout(
      () => {
        currentYear++ // Move to the next year
        updateYear() // Call the function recursively for the next year
      },
      currentYear === 1999 ? increasedDurationFor1999 : durationPerYear,
    ) // Use increased duration for 1999
  } else {
    // Ensure the last year is displayed without going blank
    yearTimerElement.textContent = 2025
    yearTimerElement.style.opacity = 1 // Ensure it is fully visible
    fadeOutLoadingScreen() // Call fade out function
  }
}

// Start the year update animation
updateYear()

// Set the initial text immediately when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("slider-text")
  textElement.textContent = "Welcome Thanks for Visiting" // Set initial text

  // Add click event listener to change text on click
  textElement.addEventListener("click", changeText)
})
// Heart emoji functionality
function createHeart() {
  const heart = document.createElement("div")
  heart.classList.add("heart")
  heart.innerText = "❤️" // Heart emoji

  // Set size based on screen width
  if (window.innerWidth < 768) {
    // Mobile view
    heart.style.fontSize = "20px" // Smaller size for mobile
  } else {
    heart.style.fontSize = "30px" // Default size for larger screens
  }

  heart.style.position = "fixed" // Change to fixed to prevent layout shift
  heart.style.left = Math.random() * 100 + "vw" // Random horizontal position
  heart.style.top = "0" // Start from the top
  document.body.appendChild(heart)

  // Remove heart after animation
  heart.addEventListener("animationend", () => {
    heart.remove()
  })
}
// Function to add heart drop effect to buttons
function addHeartDropEffectToButtons(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      for (let i = 0; i < 10; i++) {
        // Create 10 heart emojis
        createHeart()
      }
    })
  })
}

// Call this function for the donation overlay buttons
const donationButtons = document.querySelectorAll("#donation-overlay .glow-button")
addHeartDropEffectToButtons(donationButtons)

// Call this function for the widget image button
const widgetImage = document.querySelector(".widget-image")
addHeartDropEffectToButtons([widgetImage])

// Function to handle mouse movement for drawing
let isDrawing = false
function handleMouseMove(event) {
  if (isDrawing) {
    const drawingDot = document.createElement("div")
    drawingDot.classList.add("drawing")
    drawingDot.style.left = `${event.pageX}px`
    drawingDot.style.top = `${event.pageY}px`
    document.body.appendChild(drawingDot)

    // Remove the dot after 5 seconds
    setTimeout(() => {
      drawingDot.style.opacity = 0 // Fade out
      setTimeout(() => {
        drawingDot.remove() // Remove from DOM
      }, 500) // Match this duration with the CSS transition duration
    }, 5000)
  }
}

// Function to start drawing
function startDrawing() {
  isDrawing = true
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false
}

// Add event listener for mouse down to start drawing
document.addEventListener("mousedown", (event) => {
  startDrawing() // Start drawing on click
  handleMouseMove(event) // Call handleMouseMove to draw at the click position
})

// Add event listener for mouse move to draw
document.addEventListener("mousemove", handleMouseMove) // Start drawing on mouse move

// Add event listener for mouse up to stop drawing
document.addEventListener("mouseup", stopDrawing) // Stop drawing on mouse up

// Function to open the overlay for services
function openOverlay() {
  document.getElementById("table-overlay").style.display = "flex" // Show overlay
}
// Function to close the overlay for services
function closeOverlay() {
  document.getElementById("table-overlay").style.display = "none" // Hide overlay
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
// Function to open the projects overlay
function openProjectsOverlay() {
  document.getElementById("projects-overlay").style.display = "flex" // Show overlay
}

// Function to close the projects overlay
function closeProjectsOverlay() {
  document.getElementById("projects-overlay").style.display = "none" // Hide overlay
}

// Add event listener to the projects button
document.getElementById("button3").addEventListener("click", openProjectsOverlay)

// Add event listener to the projects overlay to close it when clicking outside the content
document.getElementById("projects-overlay").addEventListener("click", function (event) {
  // Check if the clicked target is the overlay itself
  if (event.target === this) {
    closeProjectsOverlay() // Close the overlay
  }
})
// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Discord username copied to clipboard!") // Show prompt
    })
    .catch((err) => {
      console.error("Failed to copy: ", err)
    })
}

// Add event listener for the main image click
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".hover-image")

  if (mainImage) {
    mainImage.addEventListener("click", () => {
      console.log("Main image clicked") // Log to console for debugging
      copyToClipboard("tecnik.gg") // Copy text to clipboard
    })
  } else {
    console.error("Main image not found")
  }
})

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
  closeAllOverlays() // Close any active overlays
  document.getElementById("donation-overlay").style.display = "flex" // Show donation overlay
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

// Add event listener to the widget image to open the donation overlay
document.querySelector(".widget-image").addEventListener("click", openDonationOverlay)

// Add event listener to the donation overlay to close it when clicking outside the content
document.getElementById("donation-overlay").addEventListener("click", function (event) {
  // Check if the clicked target is the overlay itself
  if (event.target === this) {
    closeDonationOverlay() // Close the overlay
  }
})

// Function to open or close the notification panel
function openNotificationPanel() {
  const notificationPanel = document.getElementById("notification-panel")
  if (notificationPanel.style.display === "flex") {
    notificationPanel.style.display = "none" // Hide notification panel
  } else {
    notificationPanel.style.display = "flex" // Show notification panel
  }
}

// Add event listener to the notification bell
document.querySelector(".notification-bell").addEventListener("click", openNotificationPanel)

// Close the notification panel when clicking outside of it
document.addEventListener("click", (event) => {
  const notificationPanel = document.getElementById("notification-panel")
  const bellIcon = document.querySelector(".notification-bell")

  // Check if the click was outside the notification panel and the bell icon
  if (!notificationPanel.contains(event.target) && !bellIcon.contains(event.target)) {
    notificationPanel.style.display = "none" // Close the notification panel
  }
})

// Function to disable right-click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault()
})

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Register the service worker
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope)
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
  })
}
