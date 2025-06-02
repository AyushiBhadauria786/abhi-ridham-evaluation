//Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.


const dropDownButton = document.querySelector('.dropdown-button');
const dropDownOptions = document.querySelector('.dropdown-options');

dropDownButton.addEventListener('click',() => {
    dropDownOptions.style.display = dropDownOptions.style.display === 'none' ? 'block' : 'none';
})