// Write a JavaScript program that sends a desktop notification to the user after getting permission.

//Solution 1
function showNotification(){
    const notification = new Notification("New Desktop notification" , {
        body: "Custom Notification for Desktop"
    })

    notification.onclick = (e) => {
        window.location.href = "youtube.com/any"
    }
}

if(Notification.permission === 'granted') {
    showNotification();
}else if(Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
        if(permission === 'granted'){
            showNotification();
        }
    })
}


//Solution 2
if ('Notification' in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') { 
      const notification = new Notification('Hello!', {
        body: 'This is your desktop notification.',
        icon: 'https://via.placeholder.com/48', 
      });

      notification.onclick = () => {
        alert('Notification clicked!');
      };
    } else {
      alert('Notification permission denied.');
    }
  });
} else {
  console.error('Notifications are not supported in this browser.');
}