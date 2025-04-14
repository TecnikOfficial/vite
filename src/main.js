import './style.css';

// Array of text options
const textOptions = [
    "COMPUTER ENTHUSIAST",
    "GRAPHICS DESIGNER VFX",
    "A.i TECH EXPLORER 010",
    "WEB DESIGN + DEVELOPER",
    "PRIVACY FOCUSED MODE",
    "DIGITAL MUSIC CREATOR",
    "CASUAL GAMER GG + OG",
    "FREELANCE VIDEO EDITOR"    
];

let currentTextIndex = 0;

function changeText() {
    const textElement = document.getElementById("slider-text");
    
    if (currentTextIndex < textOptions.length) {
        textElement.textContent = textOptions[currentTextIndex];
        currentTextIndex++;
    } else {
        currentTextIndex = 0;
    }
}

function startTextDisplay() {
    setInterval(changeText, 3000);
}

function fadeOutLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        setTimeout(() => {
            startTextDisplay();
        }, 400);
    }, 1500);
}

let currentYear = 1999;
const yearTimerElement = document.getElementById('year-timer');
const totalYears = 2025 - 1999 + 1;
const durationPerYear = 4000 / totalYears;
const increasedDurationFor1999 = 900;

function updateYear() {
    yearTimerElement.textContent = currentYear;

    yearTimerElement.style.opacity = 1;
    setTimeout(() => {
        yearTimerElement.style.opacity = 0;
    }, (currentYear === 1999 ? increasedDurationFor1999 : durationPerYear) - 30);

    if (currentYear < 2025) {
        setTimeout(() => {
            currentYear++;
            updateYear();
        }, currentYear === 1999 ? increasedDurationFor1999 : durationPerYear);
    } else {
        yearTimerElement.textContent = 2025;
        yearTimerElement.style.opacity = 1;
        fadeOutLoadingScreen();
    }
}

updateYear();

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById("slider-text");
    textElement.textContent = "Welcome Thanks for Visiting";
    textElement.addEventListener('click', changeText);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    if (window.innerWidth < 768) {
        heart.style.fontSize = '20px';
    } else {
        heart.style.fontSize = '30px';
    }

    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '0';
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function addHeartDropEffectToButtons(buttons) {
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            for (let i = 0; i < 10; i++) {
                createHeart();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const donationButtons = document.querySelectorAll('#donation-overlay .glow-button');
    addHeartDropEffectToButtons(donationButtons);

    const widgetImage = document.querySelector('.widget-image');
    addHeartDropEffectToButtons([widgetImage]);
});

let isDrawing = false;

function handleMouseMove(event) {
    if (isDrawing) {
        const drawingDot = document.createElement('div');
        drawingDot.classList.add('drawing');
        drawingDot.style.left = `${event.pageX}px`;
        drawingDot.style.top = `${event.pageY}px`;
        document.body.appendChild(drawingDot);

        setTimeout(() => {
            drawingDot.style.opacity = 0;
            setTimeout(() => {
                drawingDot.remove();
            }, 500);
        }, 5000);
    }
}

function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}

document.addEventListener('mousedown', (event) => {
    startDrawing();
    handleMouseMove(event);
});

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', stopDrawing);

function openOverlay() {
    document.getElementById("table-overlay").style.display = "flex";
}

window.closeOverlay = function() {
    document.getElementById("table-overlay").style.display = "none";
};

document.getElementById("button2")?.addEventListener("click", openOverlay);

document.getElementById("table-overlay")?.addEventListener("click", function(event) {
    if (event.target === this) {
        closeOverlay();
    }
});

function openProjectsOverlay() {
    document.getElementById("projects-overlay").style.display = "flex";
}

function closeProjectsOverlay() {
    document.getElementById("projects-overlay").style.display = "none";
}

window.closeProjectsOverlay = closeProjectsOverlay;

document.getElementById("button3")?.addEventListener("click", openProjectsOverlay);

document.getElementById("projects-overlay")?.addEventListener("click", function(event) {
    if (event.target === this) {
        closeProjectsOverlay();
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Discord username copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.hover-image');
    
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            copyToClipboard('tecnik.gg');
        });
    }
});

window.handleDonation = function(url) {
    const messageElement = document.createElement('div');
    messageElement.style.position = 'fixed';
    messageElement.style.top = '40%';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translate(-50%, -50%)';
    messageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    messageElement.style.color = 'white';
    messageElement.style.padding = '20px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.zIndex = '200';
    messageElement.style.fontSize = '1.5rem';
    messageElement.style.fontWeight = 'bold';
    messageElement.innerText = "🤗Thanks so much for your support! It means a lot❤️";

    if (window.innerWidth < 768) {
        messageElement.style.width = '70%';
    } else {
        messageElement.style.width = '450px';
    }

    document.body.appendChild(messageElement);

    setTimeout(() => {
        window.open(url, '_blank');
        document.body.removeChild(messageElement);
    }, 2000);
}

function openDonationOverlay() {
    document.getElementById("donation-overlay").style.display = "flex";
}

window.closeDonationOverlay = function() {
    document.getElementById("donation-overlay").style.display = "none";
}

function closeAllOverlays() {
    closeOverlay();
    closeProjectsOverlay();
    closeDonationOverlay();
}

document.querySelector('.widget-image')?.addEventListener('click', openDonationOverlay);

document.getElementById("donation-overlay")?.addEventListener("click", function(event) {
    if (event.target === this) {
        closeDonationOverlay();
    }
});

window.toggleNotificationPanel = function() {
    const notificationPanel = document.getElementById("notification-panel");
    notificationPanel.style.display = notificationPanel.style.display === "flex" ? "none" : "flex";
}

window.openNotificationPanel = window.toggleNotificationPanel;

document.addEventListener('DOMContentLoaded', function() {
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', window.toggleNotificationPanel);
    }
});

document.addEventListener('click', function(event) {
    const notificationPanel = document.getElementById("notification-panel");
    const bellIcon = document.querySelector('.notification-bell');
    
    if (notificationPanel && !notificationPanel.contains(event.target) && !bellIcon?.contains(event.target)) {
        notificationPanel.style.display = "none";
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
