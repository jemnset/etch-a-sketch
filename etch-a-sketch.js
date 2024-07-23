let containerSize = 800;
let gridSize = 16;

const container = document.querySelector("div");
container.classList.add("container");
container.style.width = containerSize + "px";
container.style.height = containerSize + "px";

createGrid(gridSize);


function createGrid(gridSize){
    
    for(let i=0; i<(gridSize * gridSize); i++){
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.flex = `0 0 ${containerSize / gridSize}px`;
        item.textContent = `${i % 16 +  1}`;
        item.addEventListener("mouseover", ()=> {
            item.style.background = "blue";
        });
        container.appendChild(item);
    }
}
/** 
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", ()=> {
    
});*/