let actionKeysArr = [];

function createKeys(obj, parent){    
    for (let key in obj) {       
        const newKey = document.createElement('buttom');
        newKey.className = 'button';
        newKey.textContent = obj[key];
        if (key.indexOf('key') == -1) {
            newKey.setAttribute('data-type', 'action');           
            newKey.classList.add('action-button');
            actionKeysArr.push(key);
        } 
        newKey.setAttribute('data-name', key); 
        parent.appendChild(newKey);
    }
    console.log(actionKeysArr);
}

function getActionButtons(){
    let keyButton = document.querySelectorAll('.button');

}

export default {createKeys, actionKeysArr}