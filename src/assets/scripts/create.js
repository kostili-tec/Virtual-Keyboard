function createDiv(container) {
    const div = document.createElement("div");
    div.className = 'yellow';
    container.appendChild(div);
    const divChild = document.createElement("div");
    divChild.className = "black";
    div.appendChild(divChild);
}

export default {
    createDiv
};