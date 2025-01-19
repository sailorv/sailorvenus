const startMenu = document.getElementById('start-menu');

// Open and close start menu
function startMenuOpen() {
    if (startMenu) {
        if (startMenu.style.display != 'block') {
            startMenu.style.display = 'block';
        }
        else {
            startMenu.style.display = 'none';
        }
    }
}

// Start menu sounds
const startMenuAudio = document.getElementById('startHoverSound');
const startMenuLinks = document.querySelectorAll('#start-menu li');

startMenuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('mouseover', function(event) {
        startMenuAudio.play();
    });
});

