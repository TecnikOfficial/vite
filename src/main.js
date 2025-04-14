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
  if (!buttons || buttons.length === 0) return

  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      for (let i = 0; i < 10; i++) {
        // Create 10 heart emojis
        createHeart()
      }
    })
  })
}

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

// Function to open or close the notification panel
function openNotificationPanel() {
  const notificationPanel = document.getElementById("notification-panel")
  if (notificationPanel.style.display === "flex") {
    notificationPanel.style.display = "none" // Hide notification panel
  } else {
    notificationPanel.style.display = "flex" // Show notification panel
  }
}

// Function to disable right-click
function disableRightClick(e) {
  e.preventDefault()
}

// Initialize all event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start the year update animation
  updateYear()

  // Set initial text
  const textElement = document.getElementById("slider-text")
  if (textElement) {
    textElement.textContent = "Welcome Thanks for Visiting" // Set initial text
    textElement.addEventListener("click", changeText) // Add click event listener
  }

  // Add event listeners for mouse drawing
  document.addEventListener("mousedown", (event) => {
    startDrawing()
    handleMouseMove(event)
  })
  document.addEventListener("mousemove", handleMouseMove)
  document.addEventListener("mouseup", stopDrawing)

  // Add event listener to services button
  const servicesButton = document.getElementById("button2")
  if (servicesButton) {
    servicesButton.addEventListener("click", openOverlay)
  }

  // Add event listener to projects button
  const projectsButton = document.getElementById("button3")
  if (projectsButton) {
    projectsButton.addEventListener("click", openProjectsOverlay)
  }

  // Add event listener for the main image click
  const mainImage = document.querySelector(".hover-image")
  if (mainImage) {
    mainImage.addEventListener("click", () => {
      copyToClipboard("tecnik.gg")
    })
  }

  // Add event listener to the widget image
  const widgetImage = document.querySelector(".widget-image")
  if (widgetImage) {
    widgetImage.addEventListener("click", openDonationOverlay)
  }

  // Add event listener to the notification bell
  const notificationBell = document.querySelector(".notification-bell")
  if (notificationBell) {
    notificationBell.addEventListener("click", openNotificationPanel)
  }

  // Add event listeners to close buttons
  const closeButtons = document.querySelectorAll(".close-overlay")
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const overlay = this.closest(".overlay")
      if (overlay) {
        overlay.style.display = "none"
      }
    })
  })

  // Add event listeners to donation buttons
  const donationButtons = document.querySelectorAll("#donation-overlay .glow-button")
  donationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.getAttribute("onclick")
      if (url) {
        // Extract URL from onclick attribute
        const match = url.match(/'([^']*)'/)
        if (match && match[1]) {
          handleDonation(match[1])
        }
      }
    })
  })

  // Add heart drop effect to buttons
  addHeartDropEffectToButtons(document.querySelectorAll("#donation-overlay .glow-button"))
  if (widgetImage) {
    addHeartDropEffectToButtons([widgetImage])
  }

  // Add event listeners to close overlays when clicking outside
  const overlays = document.querySelectorAll(".overlay")
  overlays.forEach((overlay) => {
    overlay.addEventListener("click", function (event) {
      if (event.target === this) {
        this.style.display = "none"
      }
    })
  })

  // Close notification panel when clicking outside
  document.addEventListener("click", (event) => {
    const notificationPanel = document.getElementById("notification-panel")
    const bellIcon = document.querySelector(".notification-bell")

    if (
      notificationPanel &&
      bellIcon &&
      !notificationPanel.contains(event.target) &&
      !bellIcon.contains(event.target)
    ) {
      notificationPanel.style.display = "none"
    }
  })

  // Disable right-click
  document.addEventListener("contextmenu", disableRightClick)

  // Register service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/vite/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope)
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
  }
})

// Make functions available globally
window.changeText = changeText
window.openOverlay = openOverlay
window.closeOverlay = closeOverlay
window.openProjectsOverlay = openProjectsOverlay
window.closeProjectsOverlay = closeProjectsOverlay
window.handleDonation = handleDonation
window.openDonationOverlay = openDonationOverlay
window.closeDonationOverlay = closeDonationOverlay
window.closeAllOverlays = closeAllOverlays
window.openNotificationPanel = openNotificationPanel
window.copyToClipboard = copyToClipboard
