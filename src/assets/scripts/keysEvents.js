function keyDowned(event, buttons) {
  buttons.forEach((el) => {
    const dataAttribute = el.getAttribute('data-name');
    if (dataAttribute === event) {
      el.classList.add('button-press');
    }
  });
}

function keyUpped(event, buttons) {
  buttons.forEach((el) => {
    const dataAttribute = el.getAttribute('data-name');
    if (dataAttribute === event) {
      el.classList.remove('button-press');
    }
  });
}

function getCurrentButton(event, buttons) {
  let currentButton;
  buttons.forEach((el) => {
    const dataAttribute = el.getAttribute('data-name');
    if (dataAttribute === event) {
      currentButton = el;
    }
  });
  return currentButton;
}
/* eslint-disable no-param-reassign */
function printToTextarea(textarea, button) {
  const text = button.textContent;
  switch (text) {
    case 'Shift':
      textarea.textContent += '';
      break;
    case 'Ctrl':
      textarea.textContent += '';
      break;
    case 'Caps Lock':
      textarea.textContent += '';
      break;
    case 'Space':
      textarea.textContent += ' ';
      break;
    case 'Delete':
      textarea.textContent += ' ';
      break;
    case 'Tab':
      textarea.textContent += '\t';
      break;
    case 'Enter':
      textarea.textContent += '\n';
      break;
    case 'Backspace': {
      const currentText = textarea.textContent;
      textarea.textContent = currentText.substring(0, currentText.length - 1);
      break;
    }
    default:
      textarea.textContent += text;
      break;
  }
}
/* eslint-enable no-param-reassign */

export default {
  keyDowned, keyUpped, getCurrentButton, printToTextarea,
};
