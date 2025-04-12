export function setupCopyToClipboard() {
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
  const mainImage = document.querySelector(".hover-image")

  if (mainImage) {
    mainImage.addEventListener("click", () => {
      console.log("Main image clicked") // Log to console for debugging
      copyToClipboard("tecnik.gg") // Copy text to clipboard
    })
  }
}
