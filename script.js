// Script to manually control multiple progress bars

// Function to set the progress for a specific bar
function setProgress(barId, indicatorId, percentage) {
    const progressIndicator = document.getElementById(indicatorId);
    
    if (percentage >= 0 && percentage <= 100) {
        progressIndicator.style.width = percentage + '%';
    } else {
        console.error("Invalid percentage value. It must be between 0 and 100.");
    }
}

// Set progress for each progress bar
setProgress('progressBar1', 'progressIndicator1', 40);  // 40% for Bar 1
setProgress('progressBar2', 'progressIndicator2', 60);  // 60% for Bar 2
setProgress('progressBar3', 'progressIndicator3', 80);  // 80% for Bar 3
