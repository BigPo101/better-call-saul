// Wait for the video to finish playing or be clicked
const introVideo = document.getElementById('introVideo');
const videoContainer = document.getElementById('videoContainer');

// Function to handle fade out
function fadeOutVideo() {
    videoContainer.style.transition = 'opacity 1s'; // Transition for fade effect
    videoContainer.style.opacity = '0'; // Fade out

    // After the fade-out is complete, hide the container
    setTimeout(() => {
        videoContainer.style.display = 'none'; // Hide the video container
    }, 1000); // Match this with the duration of the fade-out transition
}

// Fade out when video ends
if (introVideo) {
    introVideo.addEventListener('ended', fadeOutVideo);
}

// Fade out when video is clicked
if (videoContainer) {
    videoContainer.addEventListener('click', fadeOutVideo);
}

// Function to animate progress for a specific bar and stop at the desired percentage
function animateProgress(barId, indicatorId, percentage) {
    const progressIndicator = document.getElementById(indicatorId);
    
    if (progressIndicator) {
        // Reset width for restart animation
        progressIndicator.style.width = '0%';
        progressIndicator.classList.remove('animated');
        
        // Ensure the percentage is valid (between 0 and 100)
        if (percentage >= 0 && percentage <= 100) {
            // Dynamically set the target percentage width using a CSS variable
            progressIndicator.style.setProperty('--target-width', percentage + '%');
            
            // Delay adding the animation class to allow a visual reset
            setTimeout(() => {
                progressIndicator.style.width = percentage + '%';  // Set the final width
                progressIndicator.classList.add('animated');       // Add animation class for pulse + fill
            }, 100); // 100ms delay before animation starts
        } else {
            console.error('Invalid percentage value. It must be between 0 and 100.');
        }
    } else {
        console.warn(`Progress bar with id ${indicatorId} not found.`);
    }
}

// Animate the progress bars when the page is loaded
window.onload = function() {
    // First page (index.html)
    if (document.getElementById('progressIndicator1')) {
        animateProgress('progressBar1', 'progressIndicator1', 10); // Stop at 40% for Bar 1
    }

    // Second page (season1.html)
    if (document.getElementById('progressIndicatorSeason1')) { // Changed ID here
        animateProgress('progressBar1', 'progressIndicatorSeason1', 10); // Stop at 50% for Season 1
    }
};
