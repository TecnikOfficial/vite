import "./style.css"
import { setupYearTimer } from "./modules/yearTimer.js"
import { setupTextSlider } from "./modules/textSlider.js"
import { setupHeartEffects } from "./modules/heartEffects.js"
import { setupDrawing } from "./modules/drawing.js"
import { setupOverlays } from "./modules/overlays.js"
import { setupNotifications } from "./modules/notifications.js"
import { setupCopyToClipboard } from "./modules/clipboard.js"
import { setupDonation } from "./modules/donation.js"

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

// Initialize all modules
document.addEventListener("DOMContentLoaded", () => {
  setupYearTimer()
  setupTextSlider()
  setupHeartEffects()
  setupDrawing()
  setupOverlays()
  setupNotifications()
  setupCopyToClipboard()
  setupDonation()

  // Disable right-click
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  })
})
