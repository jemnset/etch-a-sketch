const container = document.querySelector("div");
container.classList.add("container");

let gridSize = 16 * 16;

for(let i=0; i<gridSize; i++){
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = `${i % 16 +  1}`;
    item.addEventListener("mouseover", ()=> {
        item.style.background = "blue";
    });
    container.appendChild(item);
}