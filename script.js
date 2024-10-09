// Function to set the progress for a specific bar
function setProgress(barId, indicatorId, percentage) {
    const progressIndicator = document.getElementById(indicatorId);
    
    if (progressIndicator) {  // Check if the element exists on the current page
        if (percentage >= 0 && percentage <= 100) {
            progressIndicator.style.width = percentage + '%';
        } else {
            console.error("Invalid percentage value. It must be between 0 and 100.");
        }
    } else {
        console.warn(`Progress bar with id ${indicatorId} not found on this page.`);
    }
}

// Set progress for the first page's bars (index.html)
if (document.getElementById('progressIndicator1')) {
    setProgress('progressBar1', 'progressIndicator1', 40);  // 40% for Bar 1
    setProgress('progressBar2', 'progressIndicator2', 60);  // 60% for Bar 2
    setProgress('progressBar3', 'progressIndicator3', 80);  // 80% for Bar 3
}

// Set progress for the second page's bar (progress2.html)
if (document.getElementById('progressIndicator4')) {
    setProgress('progressBar4', 'progressIndicator4', 50);  // 50% for Bar 4 on the second page
}
