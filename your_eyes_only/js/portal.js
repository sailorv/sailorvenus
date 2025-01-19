/* Portal */

function setTime() {
    // set the current hour
    const now = new Date();
    const hour = now.getHours();

    // get the current time as a string
    const currentTime = hour.toLocaleString();

    if (document.getElementById('goku')) {
        // make goku show if it's past 7
        if (currentTime >= 18 && currentTime < 24) {
            const portal = document.createElement('div');
            portal.setAttribute('id','Portal');
            portal.innerHTML = '<a class="icon-app" data-window="fantasy_realm"><img src="/assets/images/Portal.gif"></a>';
            document.getElementById('goku').insertAdjacentElement('afterend',portal);

            // Start menu sounds
            const portalAudio = new Audio('/assets/sounds/octopath_portal.wav');

            portal.addEventListener('mouseover', function() {
                portalAudio.play();
            });
            portal.addEventListener('mouseout', function() {
                portalAudio.pause();
                portalAudio.currentTime = 0;
            })
        }
    }
}

document.addEventListener("DOMContentLoaded", setTime());
