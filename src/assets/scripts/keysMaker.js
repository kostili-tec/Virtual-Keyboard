import keysObject from './keysObject';

const {actionButtonsArr} = keysObject;

function createKeys(obj, parent) {
  for (const key in obj) {   
    const newKey = document.createElement('buttom');
    newKey.className = 'button';
    newKey.textContent = obj[key];    
    if (actionButtonsArr.indexOf(obj[key], 0) != -1 ) {
      console.log(obj[key]);
      newKey.setAttribute('data-type', 'action');
      newKey.classList.add('action-button');
    } 
    newKey.setAttribute('data-name', key);
    parent.appendChild(newKey);
  }
}



export default { createKeys };
