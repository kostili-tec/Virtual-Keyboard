import keysObject from './keysObject';

const { actionButtonsArr } = keysObject;

function createKeys(obj, parent) {
  Object.entries(obj).forEach((valueArr) => {
    const name = valueArr[0];
    const nameValue = valueArr[1][0];
    const newKey = document.createElement('button');
    newKey.className = 'button';
    newKey.textContent = nameValue;
    if (actionButtonsArr.indexOf(nameValue, 0) !== -1) {
      newKey.setAttribute('data-type', 'action');
      newKey.classList.add('action-button');
      newKey.id = name.toLowerCase();
    }
    newKey.setAttribute('data-name', name);
    parent.appendChild(newKey);
  });
}
/* eslint-disable no-param-reassign */
function keysUpCase(obj, element) {
  const elData = element.getAttribute('data-name');
  Object.keys(obj).forEach((item) => {
    Object.entries(obj[`${item}`]).forEach((valueArr) => {
      const name = valueArr[0];
      const nameValue = valueArr[1][1];
      if (elData === name) {
        element.textContent = nameValue;
      }
    });
  });
}

function keysLowCase(obj, element) {
  const elData = element.getAttribute('data-name');
  Object.keys(obj).forEach((item) => {
    Object.entries(obj[`${item}`]).forEach((valueArr) => {
      const name = valueArr[0];
      const nameValue = valueArr[1][0];
      if (elData === name) {
        element.textContent = nameValue;
      }
    });
  });
}

function keysCapsOn(obj, element) {
  const elData = element.getAttribute('data-name');
  Object.keys(obj).forEach((item) => {
    Object.entries(obj[`${item}`]).forEach((valueArr) => {
      const name = valueArr[0];
      const nameValue = valueArr[1][1];
      if (elData === name && element.textContent.match(/[a-zA-Zа-яА-Я]/gu) != null) { // /[\p{Alpha}\p{M}]/gu
        element.textContent = nameValue;
      }
    });
  });
}
/* eslint-enable no-param-reassign */
export default {
  createKeys, keysUpCase, keysLowCase, keysCapsOn,
};
