document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'icon-app'
    const iconApps = document.querySelectorAll('.icon-app');

    // Add a click event listener to each 'icon-app' element
    iconApps.forEach(function(iconApp) {
        const windowId = iconApp.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        iconApp.addEventListener('click', function() {
            // Check if the window element exists
            if (windowElement) {
                // Set the 'display' style to 'block'
                windowElement.style.display = 'block';
            }
        });
    });
});
