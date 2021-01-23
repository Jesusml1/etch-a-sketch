const defaultSize = 15;
let defaultColor = "black";
const colors = ["black", "blue", "red", "yellow", "orange", "purple", "green"];

const createGrid = (gridSize) => {
  const grid = document.querySelector(".grid");
  const squareSide = 400 / gridSize;
  const squareNumber = Math.round(Math.pow(gridSize, 2));
  console.log(squareNumber);

  for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute(
      "style",
      `width: ${squareSide}px; height: ${squareSide}px;`
    );
    square.id = i;
    grid.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  // Hover event in the grid
  squares.forEach((square, i) =>
    square.addEventListener("mouseover", () => {
      square.classList.add(defaultColor);
    })
  );
};

const deleteGrid = () => {
  const grid = document.querySelector(".grid");
  console.log(grid.children);
};

// Clear button event
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function () {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove(...colors);
  });
});

// Set size button event
const setSizeBtn = document.querySelector(".setsize-btn");
setSizeBtn.addEventListener("click", () => {
  const gridSize = prompt("insert grid size:");
  const grid = document.querySelector(".grid");
  grid.querySelectorAll("*").forEach((square) => square.remove());
  createGrid(gridSize);
});

// Set color event
const selectColors = document.getElementById("colors");
selectColors.addEventListener("change", () => {
  console.log(selectColors.value);
  defaultColor = selectColors.value;
});

// Create default grid
createGrid(defaultSize);
