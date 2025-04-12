import "./style.css"

// Initialize the app
document.querySelector("#app").innerHTML = `
<div id="loading-screen">
    <div class="loading-content">
        <div id="year-timer">1999</div>
    </div>
</div>
<div class="video-background">
    <video autoplay muted loop>
        <source src="https://tecnik.pages.dev/assets/media/video.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
    <div class="slider">
        <img src="https://tecnik.pages.dev/assets/media/tecnikmain4.avif" class="hover-image" title="Click To Copy!" alt="Main Image" width="auto" 
 height="auto" loading="lazy">
        <div class="text three-d" id="slider-text">WELCOME!</div>   
    <div class="button-container">
            <button class="glow-button" onclick="window.location.href='https://tecnik.bio.link/'" title="📧Connect with Us">Contact</button>
            <button class="glow-button" id="button2" title="💲Freelance">Services</button>
            <button class="glow-button" id="button3" title="✔️Completed & Delivered">Projects</button>
        </div>
        <!-- Iframe-->
        <div class="iframe-container">
            <iframe scrolling="no" id="hearthis_at_user_syncking" width="100%" height="350" src="https://app.hearthis.at/syncking/embed/?hcolor=ba1010&css=&skin=black" title="SyncKing" frameborder="0" allowtransparency></iframe>
        </div>
    </div>
    <div class="widget-container">
        <img src="https://tecnik.pages.dev/assets/media/donate.webp" class="widget-image" title="TYSM❤️" alt="Donate" width="100%" 
 height="100%" loading="lazy">
    </div> 
    <!-- Donation Overlay -->
    <div id="donation-overlay" class="overlay">
        <div class="overlay-content">
            <span class="close-overlay" id="close-donation">✖</span>
            <h2 style="color: green; text-align: center; text-decoration: underline; margin-bottom: 20px;">Choose Payment Method to Support</h2>
            <div class="button-container">
                <button class="glow-button donation-btn" data-url="https://upi2qr.in/pay?name=Tecnik+Official&upiId=tecnikpay-1@okaxis&description=Thank+You" title="Thank">Google PAY</button>
                <button class="glow-button donation-btn" data-url="https://upi2qr.in/pay?name=Tecnik+Official&upiId=tecnik@upi&description=Thank+You" title="you">₹ UPI</button>
                <button class="glow-button donation-btn" data-url="https://www.paypal.me/TecnikOfficial" title="for">💲PayPal</button>
            </div>
            <div class="button-container">
                <button class="glow-button donation-btn" data-url="https://buymeacoffee.com/tecnik" title="your">Buy me a☕</button>
                <button class="glow-button donation-btn" data-url="https://ko-fi.com/tecnik" title="support!">Ko-Fi</button>
            </div>
        </div>
    </div>
    <!-- Overlay for Table -->
    <div id="table-overlay" class="overlay">
        <div class="overlay-content">
            <span class="close-overlay" id="close-table">✖</span>
            <h2>Freelance Services</h2>
            <div class="table-scroll">
                <table>
                    <tr>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Price Range in (INR)</th>
                    </tr>
                    <tr>
                        <td>Graphic Design</td>
                        <td>A.i Photo editing, Logo/Banner/Thumbnails/Product label/Social media promotional Post Designs</td>
                        <td>149 - 849</td>
                    </tr>
                    <tr>
                        <td>Video Editing</td>
                        <td>Youtube video editing and intro/outro design or cover song mix</td>
                        <td>449 - 2499</td>
                    </tr>
                    <tr>
                        <td>Web Development</td>
                        <td>Building Static Portfolio Sites with Html5,CSS,JS. Converting sites to Android App . Provides Hosting Advice and Site Optimisation</td>
                        <td>749 - 4999</td>
                    </tr>
                    <tr>
                        <td>Resume Making</td>
                        <td>ATS compatible or modern design resume</td>
                        <td>175 - 240</td>
                    </tr>
                    <tr>
                        <td>Computer Troubleshoot</td>
                        <td>Diagnose computer related problem and try to find solution, pc build advice</td>
                        <td>FREE</td>
                    </tr>
                </table>
            </div>
            <br>
            <h4>Contact using Discord or Email📧: <a href="mailto:TecnikOfficial@Outlook.com">TecnikOfficial@Outlook.com</a></h4>
            <br>
            <p style="font-size: 15px;">Please note that the preferred payment method is UPI. Full refunds are only available for payments made via UPI. Payments made through PayPal or Stripe are not eligible for refunds.</p>
        <BR><p style="font-size: 16px; text-align: center;"><strong>GIVE US FEEDBACK <a href="https://tellonym.me/tecnik">HERE😃</a></strong></p>
        </div>
    </div>
    <img src="https://tecnik.pages.dev/assets/media/noti.webp" class="notification-bell" alt="Notification Bell" width="60px" 
 height="60px" loading="lazy"> 
</div>
<!-- New Overlay for Projects -->
<div id="projects-overlay" class="overlay">
    <div class="overlay-content">
        <span class="close-overlay" id="close-projects">✖</span>      
        <h2 style="color: green; text-decoration: underline;">Worked as Lead:</h2>
        <br>
        <div class="scrolling-text">
        <span>
            Automotive (Social Media Marketing) | Agro Pvt Ltd (Product Label & Logo Design) | Music Distributor (Website Design) | Resume Design (Multiple Clients)
        </span>
            <span>
            Automotive (Social Media Marketing) | Agro Pvt Ltd (Product Label & Logo Design) | Music Distributor (Website Design) | Resume Design (Multiple Clients)
        </span>
        </div>
        <br>
        <h2 style="color: green; text-decoration: underline;">Collaborations:</h2>
        <br>
        <div class="scrolling-text">
        <span>Cover Song Channel (Mix & Mastering), Portfolio Websites (Art Showcase) , Gaming Channel (Montage Edits)</span>
        <span>Cover Song Channel (Mix & Mastering), Portfolio Websites (Art Showcase) , Gaming Channel (Montage Edits)</span>
        <br><br>
        </div>	    
        <h2 style="color: green; text-decoration: underline;">Currently Working On:</h2>
        <br>
        <span>Building WEB App (working along with doctor)</span>
        <br><br>
        <div class="expertise-text">
        <span style="font-weight: bold;">Expertise in Efficiency | Provides Value for Money Solutions</span>
        </div>
    </div>
</div>
<!-- Notification Panel Overlay -->
<div id="notification-panel">
    <div class="overlay-content">
        <p>• Are you subscribed to ▶️<a href="https://www.youtube.com/channel/UCXucwi4swKyTmCUB9RrFaQw?sub_confirmation=1" target="_blank">Tecnik Official</a>💻 ?</p><br>
        <p>• Are you subscribed to ▶️<a href="https://www.youtube.com/channel/UC35TPNUnNegZq4mBWvU0o7g?sub_confirmation=1" target="_blank">Syncking</a>🎵 ?</p><br>
        <p>• <a href="https://www.youtube-nocookie.com/embed/videoseries?list=PLzXDhbvRPJ1A33piKX-ss1zjNAVdqu4mM&loop=1&autoplay=1&modestbranding=1" target="_blank">CSGO Montage 😎</a></p><br>
        <p>• <a href="./oldtheme/1.0.html">Old Site 🐈 </a>• <a href="https://tecnikofficial.github.io/404">4🚫4</a></p>
    </div>
</div>
<!-- Footer Section -->
<footer class="footer">
    Made with<a href="https://youtu.be/71qssscQqH8?feature=shared" target="_blank">
    <img src="https://tecnik.pages.dev/assets/media/heart.gif" alt="Heart" title="Listen💓" width="20" height="20" style="vertical-align: bottom;">
    </a>using A.i | Source Code 
    <a href="https://github.com/TecnikOfficial/TecnikOfficial.github.io" target="_blank">
    <img src="https://tecnik.pages.dev/assets/media/GITHUB-white.svg" alt="GitHub" title="Github" width="20" height="20" style="vertical-align: bottom;"></a>
</footer>
`

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

// Function to start the text display after loading
function startTextDisplay() {
  // Start changing text after a delay
  setInterval(changeText, 3000) // Change text every 3 seconds
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
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      for (let i = 0; i < 10; i++) {
        // Create 10 heart emojis
        createHeart()
      }
    })
  })
}

// Drawing functionality
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

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start the year update animation
  updateYear()

  // Set the initial text
  const textElement = document.getElementById("slider-text")
  textElement.textContent = "Welcome Thanks for Visiting" // Set initial text

  // Add click event listener to change text on click
  textElement.addEventListener("click", changeText)

  // Add event listener for mouse down to start drawing
  document.addEventListener("mousedown", (event) => {
    startDrawing() // Start drawing on click
    handleMouseMove(event) // Call handleMouseMove to draw at the click position
  })

  // Add event listener for mouse move to draw
  document.addEventListener("mousemove", handleMouseMove) // Start drawing on mouse move

  // Add event listener for mouse up to stop drawing
  document.addEventListener("mouseup", stopDrawing) // Stop drawing on mouse up

  // Add event listener to services button
  document.getElementById("button2").addEventListener("click", () => {
    document.getElementById("table-overlay").style.display = "flex" // Show overlay
  })

  // Add event listener to the table overlay close button
  document.getElementById("close-table").addEventListener("click", () => {
    document.getElementById("table-overlay").style.display = "none" // Hide overlay
  })

  // Add event listener to the overlay to close it when clicking outside the content
  document.getElementById("table-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      document.getElementById("table-overlay").style.display = "none" // Close the overlay
    }
  })

  // Add event listener to the projects button
  document.getElementById("button3").addEventListener("click", () => {
    document.getElementById("projects-overlay").style.display = "flex" // Show overlay
  })

  // Add event listener to the projects overlay close button
  document.getElementById("close-projects").addEventListener("click", () => {
    document.getElementById("projects-overlay").style.display = "none" // Hide overlay
  })

  // Add event listener to the projects overlay to close it when clicking outside the content
  document.getElementById("projects-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      document.getElementById("projects-overlay").style.display = "none" // Close the overlay
    }
  })

  // Add event listener to the widget image to open the donation overlay
  document.querySelector(".widget-image").addEventListener("click", () => {
    document.getElementById("donation-overlay").style.display = "flex" // Show donation overlay
  })

  // Add event listener to the donation overlay close button
  document.getElementById("close-donation").addEventListener("click", () => {
    document.getElementById("donation-overlay").style.display = "none" // Hide overlay
  })

  // Add event listener to the donation overlay to close it when clicking outside the content
  document.getElementById("donation-overlay").addEventListener("click", function (event) {
    // Check if the clicked target is the overlay itself
    if (event.target === this) {
      document.getElementById("donation-overlay").style.display = "none" // Close the overlay
    }
  })

  // Add event listeners to donation buttons
  document.querySelectorAll(".donation-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.getAttribute("data-url")
      handleDonation(url)
    })
  })

  // Add event listener to the notification bell
  document.querySelector(".notification-bell").addEventListener("click", () => {
    const notificationPanel = document.getElementById("notification-panel")
    if (notificationPanel.style.display === "flex") {
      notificationPanel.style.display = "none" // Hide notification panel
    } else {
      notificationPanel.style.display = "flex" // Show notification panel
    }
  })

  // Close the notification panel when clicking outside of it
  document.addEventListener("click", (event) => {
    const notificationPanel = document.getElementById("notification-panel")
    const bellIcon = document.querySelector(".notification-bell")

    // Check if the click was outside the notification panel and the bell icon
    if (
      notificationPanel &&
      bellIcon &&
      !notificationPanel.contains(event.target) &&
      !bellIcon.contains(event.target)
    ) {
      notificationPanel.style.display = "none" // Close the notification panel
    }
  })

  // Add event listener for the main image click
  const mainImage = document.querySelector(".hover-image")
  if (mainImage) {
    mainImage.addEventListener("click", () => {
      copyToClipboard("tecnik.gg") // Copy text to clipboard
    })
  }

  // Add heart drop effect to donation buttons
  const donationButtons = document.querySelectorAll("#donation-overlay .glow-button")
  addHeartDropEffectToButtons(donationButtons)

  // Add heart drop effect to the widget image button
  const widgetImage = document.querySelector(".widget-image")
  addHeartDropEffectToButtons([widgetImage])

  // Disable right-click
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  })
})

// Add instant.page script for performance
const script = document.createElement("script")
script.src = "//instant.page/5.2.0"
script.type = "module"
script.integrity = "sha384-jnZyxPjiipYXnSU0ygqeac2q7CVYMbh84q0uHVRRxEtvFPiQYbXWUorga2aqZJ0z"
document.body.appendChild(script)
