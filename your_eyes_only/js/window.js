document.addEventListener('DOMContentLoaded', function() {

    // Close window
    const closeButtons = document.querySelectorAll('.window-close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {

            const windowDiv = button.closest('.window');
            const windowID = windowDiv.id;
            console.log(windowID);
            windowDiv.style.display = 'none';
        });
    });

    // Minimize window
    // Hide button functionality
    const minimizeButtons = document.querySelectorAll('.window-minimize');

    minimizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const windowDiv = button.closest('.window');
            const windowID = windowDiv.id;
            const windowTitle = windowDiv.querySelector('.window-title').innerText;
            const windowMin = document.createElement('div');
            windowMin.textContent = windowTitle;
            windowMin.id = windowID + '-title';

            // Add to start bar
            if (document.getElementById(windowID + '-title')) {
                console.log('this element already exists');
            } else {
                const startBar = document.querySelector('.start-bar');
                startBar.appendChild(windowMin);
            }

            // Hide window from display
            // windowDiv.style.display = 'none';
            console.log(windowMin);
            windowDiv.style.display = 'none';
        });
    });

     // Drag window 
    const dragElement = document.getElementById('welcome-exe');
        
    let isDragging = false;
    let offsetX, offsetY;

    dragElement.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - dragElement.getBoundingClientRect().left;
        offsetY = e.clientY - dragElement.getBoundingClientRect().top;
        dragElement.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            dragElement.style.left = `${x}px`;
            dragElement.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        dragElement.style.cursor = 'grab';
    });
});