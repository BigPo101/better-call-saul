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
                progressIndicator.classList.add('animated');       // Add animation class
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
        animateProgress('progressBar1', 'progressIndicator1', 40); // Stop at 40% for Bar 1
    }

    // Second page (progress2.html)
    if (document.getElementById('progressIndicator2')) {
        animateProgress('progressBar4', 'progressIndicator2', 50); // Stop at 50% for Bar 4
    }
};
