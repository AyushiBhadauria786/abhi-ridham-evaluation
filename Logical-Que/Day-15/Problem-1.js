// Write a JavaScript program that uses the Geolocation API to display the user's current location.



function GetLocation(){

    const output = document.getElementById('output');    // Element to display location info


    if(!navigator.geolocation){                           // Check the browser supports Geolocation

        output.textContent = 'Geolocation is not supported by your browser.';
        return;
    }

    // Request the user's location
    navigator.geolocation.getCurrentPosition((position) => {
        // Success callback: Display the coordinates

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        output.textContent = `Latitude :  ${latitude} , Longitude :  ${longitude}`
    },
    (error) => {
        // Error callback: Display an error message
        output.textContent = `Error : Unable to retrieve your location ${error.message}`
    }
);
}



// Create a button to trigger the location request
const LocationButton = document.createElement('button');
LocationButton.textContent = 'Get Location';                  // Button text
LocationButton.onclick = GetLocation;                        // Set click event to trigger GetLocation
document.body.appendChild(LocationButton);                  //  Add button to the DOM




// Create an element to display the location output
const output = document.createElement('p');
output.id = 'output';                              // Set ID for reference
document.body.appendChild(output);                // Add output element to the DOM 