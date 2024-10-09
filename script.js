// Script to manually control the progress bar

const progressBar = document.getElementById('progressBar');
const progressIndicator = document.getElementById('progressIndicator');

// Function to set the progress (You can manually update this value)
function setProgress(percentage) {
    if (percentage >= 0 && percentage <= 100) {
        progressIndicator.style.width = percentage + '%';
    } else {
        console.error("Invalid percentage value. It must be between 0 and 100.");
    }
}

// Example: Set progress to 50% (You can change this)
setProgress('progressBar1', 'progressIndicator1', 40);  // 40% for Bar 1
setProgress('progressBar2', 'progressIndicator2', 60);  // 60% for Bar 2
setProgress('progressBar3', 'progressIndicator3', 80);  // 80% for Bar 3
