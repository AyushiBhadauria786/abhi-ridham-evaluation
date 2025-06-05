// Write a JavaScript program that uses the Geolocation API to display the user's current location.

function getLocation(){

    if(!navigator.geolocation){
        // console.error("Geolocaion is not supported by your browser");
        output.textContent = 'Geolocation is not supported by your browser.';
        return
    }

    const getCurrentPosition = () => 
            new Promise((resolve,reject) => {
                navigator.geolocation.getCurrentPosition(resolve,reject);
    });

    getCurrentPosition()
    .then((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setTimeout(() => {
            // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
            output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        },2000)
    })
    .catch((error) => {
        output.textContent = `Error: Unable to retrieve your location (${error.message})`;
    });
}


const locationButton = document.createElement('button');
locationButton.textContent = 'Get Location';
locationButton.onclick = getLocation;
document.body.appendChild(locationButton);

const output = document.createElement('p');
output.id = 'output';
document.body.appendChild(output);