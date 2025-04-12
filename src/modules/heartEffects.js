export function setupHeartEffects() {
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
}
