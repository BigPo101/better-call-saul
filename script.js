// Function to animate progress for a specific bar
function animateProgress(barId, indicatorId, percentage) {
    const progressIndicator = document.getElementById(indicatorId);
    
    if (progressIndicator) {
        // Remove previous styles to reset the progress bar
        progressIndicator.style.width = '0%';
        progressIndicator.classList.remove('animated');
        
        // Allow a brief delay before adding the animation class (for visual reset effect)
        setTimeout(() => {
            progressIndicator.style.width = percentage + '%';
            progressIndicator.classList.add('animated'); // Apply the animation class
        }, 100); // 100ms delay to allow the reset
    } else {
        console.warn(`Progress bar with id ${indicatorId} not found.`);
    }
}

// Example: Animate progress bars (set different percentages for each)
window.onload = function() {
    // First page
    if (document.getElementById('progressIndicator1')) {
        animateProgress('progressBar1', 'progressIndicator1', 40); // 40% for Bar 1
    }

    // Second page (progress2.html)
    if (document.getElementById('progressIndicator2')) {
        animateProgress('progressBar4', 'progressIndicator2', 50); // 50% for Bar 4
    }
};
