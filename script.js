
const clear = document.querySelector("#clear");
let boxes = document.querySelectorAll(".box");
const chooseRes = document.querySelector("#chooseResolution");

createGrid(16);
clear.addEventListener("click", () => {
    boxes.forEach((div) => {
        div.style.backgroundColor = "white";
    })
})

function createGrid(number){
    let heightRes = "";
    for (let i =0; i<number; i++){
        heightRes += "auto ";
    }
    let widthRes = heightRes + heightRes;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = widthRes;
    gridContainer.style.gridTemplateRows = heightRes;
    for (let i =0; i<(2*number*number); i++){
        let box = document.createElement("div");
        box.classList.add("box");
        gridContainer.appendChild(box);
    }
    boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            let red = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            div.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
        })
    })
}

chooseRes.addEventListener("click", () =>{
    let pixels = prompt("how many pixels do you want ?");
    createGrid(pixels);
})

/*boxes.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.add("blackbox");
        div.classList.remove("box");
    })
})
*/

