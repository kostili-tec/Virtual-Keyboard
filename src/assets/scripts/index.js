import nodeMaker from './create';
import keysObj from './keysObject';
import keysMaker from './keysMaker';
import keysEvents from './keysEvents';
import '../styles/style.css';
import '../scss/main.scss';

const { createDiv, createContainer, createElement } = nodeMaker;

const { createKeys, actionKeysArr } = keysMaker;

const {keyDowned, keyUpped} = keysEvents;

const BODY = document.querySelector('body');


// createDiv(BODY);

const mainContainer = createContainer(BODY);

const textArea = createElement('textarea', 'textarea', mainContainer);
const keyContainer = createElement('div', 'key__container', mainContainer);
// const rowKeys0 = createElement('div', 'row-key__container', keyContainer);
// console.log(keysObj.en);

// createKeys(keysObj['en']['row0'], rowKeys0);

Object.keys(keysObj.en).forEach((item, index) => {
  const rowKeysContainer = createElement('div', `row-key__container row${index}`, keyContainer);
  console.log(item);
  createKeys(keysObj.en[`row${index}`], rowKeysContainer);
});
// need to create action keys object


function widthChanger(){
    const rowContainer4 = document.querySelector('.row4');
    const row4Elements = rowContainer4.querySelectorAll('.action-button');
    row4Elements.forEach(item => {
        item.classList.add('row4-button');
        let dataAttribute = item.getAttribute('data-name');        
        if (dataAttribute == 'space') {
            console.log(item);
            item.id ='space-button';
        }
    })
    const rowContainer3 = document.querySelector('.row3');
    const row3Elements = rowContainer3.querySelectorAll('.action-button');
        row3Elements.forEach(item => {
            let dataAttribute = item.getAttribute('data-name'); 
            if (dataAttribute == 'shift') {
                item.id = 'shift-left';
            }
        })
    console.log(row4Elements);
}

widthChanger();
// console.log(rowContainers);
const allKeys = document.querySelectorAll('.button');
console.log(allKeys);

document.addEventListener('keydown', (event) => {
    console.log(event.code);
    let code = event.code;
    keyDowned(code, allKeys);
})

document.addEventListener('keyup', (event) => {
    let code = event.code;
    setTimeout(keyUpped, 200, code, allKeys);
})