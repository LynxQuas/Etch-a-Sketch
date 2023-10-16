const container = document.querySelector("#container");
const userColor = document.querySelector(".user_color");
const range = document.querySelector(".user_range");

let grid_count = range.value;
let currentColor = "black";
let randomMode = false;
const randomColor = document.querySelector(".btn_random-color");
randomColor.onclick = () => (randomMode = true);

function createGrid(size) {
    const gridSize = 500 / size;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.className = "grids";

        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
        container.appendChild(grid);
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.className !== "grids") return;
    currentColor = userColor.value;

    if (randomMode) {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        currentColor = `rgb(${red}, ${green}, ${blue})`;
    }

    e.target.style.backgroundColor = currentColor;
});

document.querySelector(".btn_clear").addEventListener("click", () => {
    randomMode = false;
    document.querySelectorAll(".grids").forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});

range.addEventListener("change", () => {
    document.querySelector(".value").textContent = range.value;
    container.innerHTML = "";

    grid_count = range.value;
    createGrid(grid_count);
});

createGrid(grid_count);
