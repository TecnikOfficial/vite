export function setupNotifications() {
  // Function to open or close the notification panel
  function toggleNotificationPanel() {
    const notificationPanel = document.getElementById("notification-panel")
    if (notificationPanel.style.display === "flex") {
      notificationPanel.style.display = "none" // Hide notification panel
    } else {
      notificationPanel.style.display = "flex" // Show notification panel
    }
  }

  // Add event listener to the notification bell
  document.querySelector(".notification-bell").addEventListener("click", toggleNotificationPanel)

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

  // Make function globally available
  window.openNotificationPanel = toggleNotificationPanel
}
