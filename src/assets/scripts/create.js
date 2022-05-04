function createDiv(container) {
  const div = document.createElement('div');
  div.className = 'yellow';
  container.appendChild(div);
  const divChild = document.createElement('div');
  divChild.className = 'black';
  div.appendChild(divChild);
  const header1 = document.createElement('h1');
  header1.textContent = 'Normalize test';
  container.appendChild(header1);
}

export default {
  createDiv,
};
