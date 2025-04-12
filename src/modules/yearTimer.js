export function setupYearTimer() {
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

  function fadeOutLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.opacity = 0 // Start fading out
    setTimeout(() => {
      loadingScreen.style.display = "none" // Hide after fade out
      // Start displaying the initial text for 1 seconds after unblur
      setTimeout(() => {
        window.startTextDisplay() // Start displaying text options
      }, 400) // Keep initial text for 1 seconds after unblur
    }, 1500) // Match this duration with the CSS transition duration
  }

  // Start the year update animation
  updateYear()
}
