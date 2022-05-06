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

function createContainer(parent) {
  const container = document.createElement('div');
  container.className = 'container';
  parent.appendChild(container);
  return container;
}

function createElement(typeEl, className, parent) {
  const element = document.createElement(`${typeEl}`);
  element.className = `${className}`;
  parent.appendChild(element);
  return element;
}

export default {
  createDiv, createContainer, createElement,
};
