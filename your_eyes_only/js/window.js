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

    // Close window
    const closeButtons = document.querySelectorAll('.window-close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {

            const windowDiv = button.closest('.window');
            const windowID = windowDiv.id;
            windowDiv.style.display = 'none';
        });
    });

    // Minimize window
    // Hide button functionality
    let minimizeButtons = document.querySelectorAll('.window-minimize');
    const startBar = document.querySelector('.start-bar');

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
                startBar.appendChild(windowMin);
            }

            // Hide window from display
            // windowDiv.style.display = 'none';
            windowDiv.style.display = 'none';
        });
    });
});