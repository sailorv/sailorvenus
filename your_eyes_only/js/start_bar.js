document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'icon-app'
    const startBar = document.querySelector('.start-bar .buttons');
    let startApps = Array.from(startBar.children);

    console.log(startApps);

    startApps.forEach(function(startApp) {
        const windowId = startApp.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        startApp.addEventListener('click', function() {
            console.log(windowId);
            // Check if the window element exists
            if (windowElement) {
                // Set the 'display' style to 'block'
                windowElement.style.display = 'block';
            }
        });
    });
});
