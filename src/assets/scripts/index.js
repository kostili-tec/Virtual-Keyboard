import nodeMaker from './create';
import keysObj from './keysObject';
import keysMaker from './keysMaker';
import '../styles/style.css';
import '../scss/main.scss';


const { createDiv, createContainer, createElement } = nodeMaker;
const {keysObjEn} = keysObj['en'];

const {createKeys} = keysMaker;

console.log(keysObjEn);

const BODY = document.querySelector('body');

// createDiv(BODY);

const mainContainer = createContainer(BODY);

const textArea = createElement('textarea', 'textarea', mainContainer);
const keyContainer = createElement('div', 'key__container', mainContainer);
const rowKeys0 = createElement('div', 'row-key__container', keyContainer);
// console.log(keysObj.en);

createKeys(keysObj['en']['row1'], rowKeys0);