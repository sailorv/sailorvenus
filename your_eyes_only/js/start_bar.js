document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'icon-app'
    const startBar = document.querySelector('.start-bar');
    let startApps = Array.from(startBar.children);

    startApps.forEach(function(startApp) {
        const windowId = startApp.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        startApp.addEventListener('click', function() {
            // Check if the window element exists
            if (windowElement) {
                // Set the 'display' style to 'block'
                windowElement.style.display = 'block';
            }
        });
    });
});
