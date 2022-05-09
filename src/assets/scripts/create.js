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
  createContainer, createElement,
};
