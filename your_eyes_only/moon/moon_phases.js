// Set up the page
const phaseName = document.querySelector('h1');
const phaseDescription = document.querySelector('.moon_description');
const moonLightWrapper = document.querySelector('.moon .light');
let moonPhase;

// Fetch the data for the current phase
let date = Math.round(new Date().setHours(0,0,0,0) / 1000);
let phase = `https://api.farmsense.net/v1/moonphases/?d=${encodeURIComponent(date)}`;

function moonShadow(phaseInfo) {
  moonPhase = phaseInfo[0].Phase;
  if (moonPhase === "3rd Quarter") {
    moonPhase = "Last Quarter";
  }
  moonLight = phaseInfo[0].Illumination;
  moonAge = Math.round(phaseInfo[0].Age);
  phaseName.innerText= moonPhase;

  // Waning Gibbous
  if ((moonAge > 14) && (moonAge < 22)) {
    moonLightWrapper.setAttribute('class','light waning-gibbous');
    moonLightCalc = 1.4 * moonAge - 20.8;
    moonLightWrapper.setAttribute('style',`border-right-width: ${moonLightCalc}rem`);
  }

  // Third Quarter
  else if (moonAge === 22 ) {
    moonLightWrapper.setAttribute('class','light waning-gibbous');
    moonLightWrapper.setAttribute('style',`border-right-width: 10rem`);
  }

  // Waning Crescent
  else if (moonAge > 22) {
    moonLightWrapper.setAttribute('class','light waning-crescent');
    moonLightCalc = -1.4 * moonAge + 40.8;
    moonLightWrapper.setAttribute('style',`border-left-width: ${moonLightCalc}rem`);
  }
  else {
    moonLightWrapper.removeAttribute('style');
  }
}

fetch(phase)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
      moonShadow(json);
      fetchLocalMoonData();
    })
    .catch((error) => {
        console.error('Error fetching data:', error.message);
        console.error('Error stack trace:', error.stack);
    });

// Fetch the moon_phases.json file
// Function to fetch the local JSON data and find the corresponding description
function fetchLocalMoonData() {
    fetch('moon_phases.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((moonPhasesData) => {
        // Find the corresponding phase in the JSON data
        const matchingPhase = moonPhasesData.find(phase => phase.phase === moonPhase);
  
        // Update the description if a match is found
        if (matchingPhase) {
          phaseDescription.innerHTML = matchingPhase.description;
        } else {
          phaseDescription.innerText = 'Description not found for this phase.';
        }
      })
      .catch((error) => {
        console.error('Error fetching the local JSON file:', error);
      });
  }

  // Dropdowns
  // Set up event listener for the fetch button
document.getElementById('fetchData').addEventListener('click', function() {
  // Get selected values from dropdowns
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const year = document.getElementById('year').value;

  if (month && day && year) {
    // Create a date object from selected values
    const selectedDate = new Date(year, month - 1, day); // Month is zero-indexed

    // Fetch moon phase data based on selected date
    fetchMoonPhase(selectedDate);
  } else {
    alert('Please select a valid date!');
  }
});

function fetchMoonPhase(selectedDate) {
  let unixTimestamp = Math.round(selectedDate.getTime() / 1000);
  phase = `https://api.farmsense.net/v1/moonphases/?d=${encodeURIComponent(unixTimestamp)}`;

  fetch(phase)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        moonShadow(json);
        fetchLocalMoonData();
    })
    .catch((error) => {
        console.error('Error fetching data:', error.message);
        console.error('Error stack trace:', error.stack);
    });
}