// Write a JavaScript program to create a progress bar that updates its width based on task completion.

const progressBar = document.getElementById("progress");
let currentProgress = 0;

function increaseProgress() {
    if(currentProgress < 100){
        currentProgress += 5;
        progressBar.style.width = currentProgress + "px";
    }
}

function resetProgress() {
    currentProgress = 0;
    progressBar.style.width = "0px";
}