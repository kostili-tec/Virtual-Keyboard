import keysObject from './keysObject';

const {actionButtonsArr} = keysObject;


function createKeys(obj, parent) {
  // Object.entries(obj).forEach(row => {
    Object.entries(obj).forEach(valueArr => {
      const name = valueArr[0];
      const nameValue = valueArr[1][0];
      const newKey = document.createElement('button');
      newKey.className = 'button';
      newKey.textContent = nameValue;     
      if (actionButtonsArr.indexOf(nameValue, 0) != -1) {
        newKey.setAttribute('data-type', 'action');
        newKey.classList.add('action-button');
      }
      newKey.setAttribute('data-name', name);
      parent.appendChild(newKey);
    })
  // })
}


function keysUpCase(obj, element){
  let elData = element.getAttribute('data-name');
  Object.keys(obj).forEach((item) => {
    Object.entries(obj[`${item}`]).forEach(valueArr => {
      const name = valueArr[0];
      const nameValue = valueArr[1][1];
      if (elData == name) {
        element.textContent = nameValue;
      }
    })
  })
}
function keysLowCase(obj, element){
  let elData = element.getAttribute('data-name');
  Object.keys(obj).forEach((item) => {
    Object.entries(obj[`${item}`]).forEach(valueArr => {
      const name = valueArr[0];
      const nameValue = valueArr[1][0];
      if (elData == name) {
        element.textContent = nameValue;
      }
    })
  })
}

function changeButtonsText(caseUpLow, obj, buttons) {
  buttons.forEach(item => {
    let itemData = item.getAttribute('data-name');
    Object.keys(obj).forEach(objEl => {

    })
  })
}

export default { createKeys, keysUpCase, keysLowCase };
