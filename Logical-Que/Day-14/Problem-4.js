// Write a JavaScript program that copies the content of a text box to the clipboard when a button is clicked.



const box = document.createElement('input');         // create input field
box.type = 'text';                               // set its type
box.placeholder = "Type something to copy";       // add a place holder
document.body.appendChild(box);                 // add the box to  the dom




const copyButton = document.createElement('button');       // create a button
copyButton.textContent = "Copy Text";                    // set button label
document.body.append(copyButton);                       //add the button to the dokm




copyButton.addEventListener('click', () => {            // add eventlistener
    const text = box.value;                       // get value of box 

    if(text){                                     // check for text 
        navigator.clipboard                      
        .writeText(text)                     // copy text to the clipboard
        .then(() => {
            alert("Text copied to clipboard !")
        })

        .catch((error) => {
            console.error("Failed to copy text", error)
        })
    }
    else
    {
        alert("Please enter some text to copy");
    }
});


