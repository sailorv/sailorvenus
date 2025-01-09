document.addEventListener('DOMContentLoaded', function() {

     // Drag window 
    const dragElements = document.querySelectorAll('.window');

    dragElements.forEach(dragElement => {
        let isDragging = false;
        let offsetX, offsetY;
        let dragTrigger = dragElement.querySelector('.background');

        zIndexCounter = 99;

        dragTrigger.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - dragElement.getBoundingClientRect().left;
            offsetY = e.clientY - dragElement.getBoundingClientRect().top;
            dragTrigger.style.cursor = 'grabbing';
            // dragElement.style.zIndex = zIndexCounter++;
            dragElement.style.zIndex = zIndexCounter + 2;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                dragElement.style.left = `${x}px`;
                dragElement.style.top = `${y}px`;
                dragTrigger.style.cursor = 'grabbing';
                dragTrigger.style.cursor = 'grabbing';
                dragTrigger.style.backgroundColor = '#eee';
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
            dragTrigger.style.cursor = 'grab';
            dragTrigger.style.backgroundColor = '#C5C1C6';
        });
    });

    // Start bar
    // Select all elements with the class 'icon-app'
    let startBarButtons = document.querySelector('.start-bar .buttons');
    let startApps = Array.from(startBarButtons.children);

    const openApp = () => startApps.forEach(function(startApp) {
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

    // Minimize window
    // Hide button functionality
    let minimizeButtons = document.querySelectorAll('.window-minimize');
    const startBar = document.querySelector('.start-bar .open-apps');

    minimizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const windowDiv = button.closest('.window');
            const windowID = windowDiv.id;
            const windowTitle = windowDiv.querySelector('.window-title').innerText;
            const windowMin = document.createElement('button');
            windowMin.textContent = windowTitle;
            windowMin.id = windowID + '-title';
            windowMin.setAttribute('data-window', windowID)

            // Add to start bar
            if (document.getElementById(windowID + '-title')) {
                // element already exists
            } else {
                startBar.insertAdjacentElement('beforebegin', windowMin);
            }

            // Hide window from display
            // windowDiv.style.display = 'none';
            windowDiv.style.display = 'none';
            startApps.push(windowMin);
            openApp();
        });
    });

    // Close window
    const closeButtons = document.querySelectorAll('.window-close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {

            const windowDiv = button.closest('.window');
            const windowID = windowDiv.id;
            windowDiv.style.display = 'none';
            

            // Add functionality to remove corresponding item from start bar
        });
    });
});
