export function setupDrawing() {
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
}
