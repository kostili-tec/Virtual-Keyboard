import nodeMaker from './create';
import keysObj from './keysObject';
import keysMaker from './keysMaker';
import '../styles/style.css';
import '../scss/main.scss';


const { createDiv, createContainer, createElement } = nodeMaker;

const {createKeys, actionKeysArr} = keysMaker;


const BODY = document.querySelector('body');

// createDiv(BODY);

const mainContainer = createContainer(BODY);

const textArea = createElement('textarea', 'textarea', mainContainer);
const keyContainer = createElement('div', 'key__container', mainContainer);
// const rowKeys0 = createElement('div', 'row-key__container', keyContainer);
// console.log(keysObj.en);


// createKeys(keysObj['en']['row0'], rowKeys0);

Object.keys(keysObj['en']).forEach((item, index) => {
    const rowKeysContainer = createElement('div', 'row-key__container', keyContainer);
    createKeys(keysObj['en'][`row${index}`], rowKeysContainer);
})
// need to create action keys object
console.log(actionKeysArr);