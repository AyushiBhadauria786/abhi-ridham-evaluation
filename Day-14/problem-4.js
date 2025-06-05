// Write a JavaScript program to implement drag-and-drop functionality to allow users to reorder items in a list.


let isDragging = false;
let currentItem = null;
let cointainerOffsetY = 0
let initY = 0;


const container = document.querySelector(".container")
container.style.width = container.offsetWidth + "px"
container.style.height = container.offsetHeight + "px";

document.addEventListener("mousedown", (e) => {
    // const item = e.target
    // console.log(item)

    const item = e.target.closest(".item");
    // console.log(item)
    if(item){
        isDragging = true
        currentItem = item
        cointainerOffsetY = currentItem.offsetTop;
        currentItem.classList.add("dragging")
        document.body.style.userSelect = "none";
        currentItem.classList.add("insert-animation")
        currentItem.style.top = cointainerOffsetY + "px";
        initY = e.clientY 
    }
});

document.addEventListener("mousemove", (e) => {
    if(isDragging && currentItem){
        currentItem.classList.remove("insert-animation")
        let newTop = cointainerOffsetY - (initY - e.clientY);
        if(newTop < -50){
            newTop = -50
        }
        else if(newTop > container.offsetHeight - 30){
            newTop = container.offsetHeight - 30
        }
        currentItem.style.top = newTop + "px"

        let itemSiblings = [...document.querySelectorAll(".item:not(.dragging)")]
        let nextItem = itemSiblings.find((sibiling) => {
            return (
              e.clientY - container.getBoundingClientRect().top <=
              sibiling.offsetTop + sibiling.offsetHeight / 2            
            )
        });

        itemSiblings.forEach((sibiling) => {
            sibiling.style.marginTop = "10px";
        })

        if(nextItem){
            nextItem.style.marginTop = currentItem.offsetHeight + 20 + "px"
        }

        container.insertBefore(currentItem,nextItem)
    }
})

document.addEventListener("mouseup", () => {
    if(currentItem) {
        currentItem.classList.remove("dragging");
        currentItem.style.top = "auto"
        currentItem = null;
        isDragging = false;

        document.body.style.userSelect = "auto";
    }

            let itemSiblings = [...document.querySelectorAll(".item:not(.dragging)")];

            itemSiblings.forEach((sibiling) => {
            sibiling.style.marginTop = "10px";
        })

})