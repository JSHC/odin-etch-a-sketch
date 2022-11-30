const container = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clearBoxes);
const divs = [];
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-box");
        container.appendChild(newDiv);
        newDiv.addEventListener('click', onBoxHover);
        divs.push(newDiv);
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