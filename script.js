const gridContainer = document.querySelector("#gridContainer");
for (let i =0; i<512; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    gridContainer.appendChild(box);
}
const clear = document.querySelector("#clear");
const boxes = document.querySelectorAll(".box");

boxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("blackbox");
        div.classList.remove("box");
    })
})

clear.addEventListener("click", () => {
    boxes.forEach((div) => {
        div.classList.remove("blackbox");
        div.classList.add("box");
    })
})