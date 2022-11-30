const container = document.querySelector(".grid-container");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clearBoxes);

const setGridButton = document.querySelector("#set-grid");
setGridButton.addEventListener('click', setGridSize);

const divs = [];
generateGrid(10);

function generateGrid(size) {
    if (size <= 0) {
        return;
    }

    if (divs.length > 0) {
        divs.forEach(div => {
            div.remove();
        });
        divs.length = 0;
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-box");
            container.appendChild(newDiv);
            newDiv.addEventListener('click', onBoxHover);
            divs.push(newDiv);
        }
    }
}

function onBoxHover(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "#000";
}

function clearBoxes() {
    if (divs.length === 0) {
        return;
    }

    divs.forEach(div => {
        div.style.backgroundColor = "#fff";
    });
}

function setGridSize() {
    const newSize = Number(
        prompt("Enter number of squares per side (limit: 100):")
        );
    
    if (Number.isNaN(newSize)) {
        return;
    }

    generateGrid(newSize);
}