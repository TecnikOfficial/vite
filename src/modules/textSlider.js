export function setupTextSlider() {
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
      textElement.textContent = textOptions[currentTextIndex]
      currentTextIndex++
    }
  }

  // Function to start the text display after loading
  window.startTextDisplay = () => {
    // Start changing text after a delay
    setInterval(changeText, 3000) // Change text every 3 seconds
  }

  // Set the initial text immediately when the page loads
  const textElement = document.getElementById("slider-text")
  textElement.textContent = "Welcome Thanks for Visiting" // Set initial text

  // Add click event listener to change text on click
  textElement.addEventListener("click", changeText)

  // Make changeText globally available
  window.changeText = changeText
}
