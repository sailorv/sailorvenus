const date = Math.round(new Date().getTime() / 1000);

const phase = `https://api.farmsense.net/v1/moonphases/?d=${encodeURIComponent(date)}`;

fetch(phase)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        let moonPhase = json[0].Phase;
        if (moonPhase == "3rd quarter") {
            moonPhase = "last quarter moon";
        }
        document.getElementById('moon_phase').innerHTML= moonPhase;
    })
    .catch((error) => {
        console.error('Error fetching data:', error.message);
        console.error('Error stack trace:', error.stack);
    });