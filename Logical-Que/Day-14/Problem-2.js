// Write a JavaScript program that sends a desktop notification to the user after getting permission.




function Notify(){

    if('Notification' in window){                       // check if notification api support in browser

        Notification.requestPermission().then((Permissions) => {           // request permission to send a notification
            if(Permissions === "granted"){                               // check the permission
                const notification = new Notification("Hello Abhi",{       // create notification 
                    body : "this is your desktop notification",
                });

                notification.onclick = () => {         //add click event listener to the notification
                    alert("notification clicked")
                }
            }
            else 
            {
                alert("notification permission denied")          // permission denied
            }
        });


    }
    else 
    {
        console.error("Notifications are not supported in this browser.")
    }
}


Notify();


