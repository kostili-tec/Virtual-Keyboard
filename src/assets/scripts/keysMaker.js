function createKeys(obj, parent){
    for (let key in obj) {
        console.log(`key: ${key} value: ${obj[key]}`);
        const newKey = document.createElement('buttom');
        newKey.className = 'button';
        newKey.textContent = obj[key];
        newKey.setAttribute('data-name', key);
        parent.appendChild(newKey);
    }
}

export default {createKeys}