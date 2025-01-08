/* Goku Patrol */
function setTime() {
    // set the current hour
    const now = new Date();
    const hour = now.getHours();

    // get the current time as a string
    const currentTime = hour.toLocaleString();

    if (document.getElementById('goku')) {
        // make goku show if it's past 7
        if (currentTime >= 11 && currentTime < 15) {
            document.getElementById('goku').style.display = 'block';
        } else {
            document.getElementById('goku').style.display = 'none';
        }
    }
}

/* Feed Goku */
function feedGoku() {
    document.getElementById('goku').remove();
    document.getElementById('goku_actions').innerHTML = "Thank you for giving Goku a snack. Your gift of calories will help him protect this website."
}


// check regularly
setInterval(setTime, 1000);