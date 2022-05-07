const actionKeysArr = [];

function createKeys(obj, parent) {
  for (const key in obj) {
    //   console.log(key, obj[key])
    const newKey = document.createElement('buttom');
    newKey.className = 'button';
    newKey.textContent = obj[key];
    if (key.indexOf('Key') == -1) {
      newKey.setAttribute('data-type', 'action');
      newKey.classList.add('action-button');
      actionKeysArr.push(key);
    }
    newKey.setAttribute('data-name', key);
    parent.appendChild(newKey);
  }
//   console.log(actionKeysArr);
}

function getActionButtons() {
  const keyButton = document.querySelectorAll('.button');
}

export default { createKeys, actionKeysArr };
