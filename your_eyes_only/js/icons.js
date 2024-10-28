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
                // Set the z-index
                windowElement.style.zIndex = '100';

                //Decrease z-index of other windows
                const windows = document.querySelectorAll('.window');

                // Decrease the 'z-index' of all other boxes by 1
                windows.forEach(function(window) {
                    if (window.id !== windowId) {
                        const currentZIndex = parseInt(window.style.zIndex) || 0;
                        window.style.zIndex = currentZIndex > 1 ? currentZIndex - 1 : 0;
                        // console.log(window.id + ': ' + window.style.zIndex);
                    }
                });
            }
        });
    });
});
