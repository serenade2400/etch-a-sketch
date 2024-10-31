// Select #container, #resetButton, and #update elements
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const update = document.querySelector("#update");

// Function to create the grid with flexbox
function createGrid(inputValue) {
    // Clear existing grid items if any
    container.innerHTML = "";

    // Set fixed dimensions for the container
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "800px"; // Fixed width
    container.style.height = "800px"; // Fixed height

    // Calculate size for each grid item based on inputValue
    const itemSize = 100 / inputValue; // Percentage of container size

    // Loop to create grid items
    for (let i = 0; i < inputValue * inputValue; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.flex = `0 0 ${itemSize}%`; // Set width as a percentage of the container's width
        content.style.height = `${itemSize}%`;   // Set height as a percentage of the container's height
        container.appendChild(content);
    }

    // Add 'mouseover' event to each new content element
    const contents = container.querySelectorAll(".content");
    contents.forEach(content => {
        content.addEventListener('mouseover', function() {
            content.style.backgroundColor = 'pink';
        });
    });
}

// Initial grid creation (default 16x16)
createGrid(16);

// Reset button to clear colors from the grid items
resetButton.addEventListener('click', function() {
    const contents = container.querySelectorAll(".content");
    contents.forEach(content => {
        content.style.backgroundColor = '';
    });
});

// Update button to prompt for new grid size and create the grid
update.addEventListener('click', function() {
    let inputValue = parseInt(prompt('Enter the number of grids you want per side (e.g., 16 for a 16x16 grid):'));

    if (inputValue > 0) {
        createGrid(inputValue);
    } else {
        alert("Please enter a valid size.");
    }
});
