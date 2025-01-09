const startMenu = document.getElementById('start-menu');

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
