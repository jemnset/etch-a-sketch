let containerSize = 800;
let gridSize = 16;
let initialOpacity = 0.1;
let opacityRate = 0.1;

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
        item.style.opacity = initialOpacity;
        item.addEventListener("mouseover", (e)=> {
            item.style.background = "blue";
            item.style.opacity = parseFloat(item.style.opacity) + opacityRate;
        });
        container.appendChild(item);
    }
}

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", ()=> {

    const input = prompt("Please enter a new grid size (1-100):");

    if(!Number.isNaN(input) && Number.isInteger(Number(input)) && input >= 1 && input <= 100){
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        createGrid(Number(input));
    }else if(input != null){
        alert("Invalid input. Unable to reset canvas.");
    }
});

document.body.prepend(resetBtn);