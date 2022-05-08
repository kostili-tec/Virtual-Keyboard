import nodeMaker from './create';
import keysObject from './keysObject';
import keysMaker from './keysMaker';
import keysEvents from './keysEvents';
import '../styles/style.css';
import '../scss/main.scss';

const { createContainer, createElement } = nodeMaker;

const {keysObj} = keysObject;

const { createKeys, keysUpCase, keysLowCase, keysCapsOn } = keysMaker;

const {keyDowned, keyUpped} = keysEvents;

let capsOn = false;
let lang = 'en';
let getLocalLang = getLocalStorage();

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage(getLocalLang));

console.log(getLocalLang);

function setLocalStorage(value) {    
    localStorage.setItem('langStorage', value);
}
function getLocalStorage(){
    if(localStorage.getItem('langStorage')) {
        const langGet = localStorage.getItem('langStorage');
        lang = langGet;
        return langGet;
    } else {
        localStorage.setItem('langStorage', lang);
        return 'en';
    }
}
const BODY = document.querySelector('body');

const mainContainer = createContainer(BODY);

const textArea = createElement('textarea', 'textarea', mainContainer);
const keyContainer = createElement('div', 'key__container', mainContainer);

createKeysOnLoad(keysObj[`${getLocalLang}`]);



// Object.keys(keysObj.en).forEach((item) => {
//   const rowKeysContainer = createElement('div', `row-key__container ${item}`, keyContainer); 
// //   createKeys(keysObj.en[`row${index}`], rowKeysContainer);
//   createKeys(keysObj.en[`${item}`], rowKeysContainer);
// //   createKeysV2(Object.entries(keysObj.en)[index], rowKeysContainer);
// });

function widthChanger(){
    const rowContainer4 = document.querySelector('.row4');
    const row4Elements = rowContainer4.querySelectorAll('.action-button');
    row4Elements.forEach(item => {
        item.classList.add('row4-button');
        let dataAttribute = item.getAttribute('data-name');        
        if (dataAttribute == 'Space') {            
            item.id ='space-button';
        }
    })
    const rowContainer3 = document.querySelector('.row3');
    const row3Elements = rowContainer3.querySelectorAll('.action-button');
        row3Elements.forEach(item => {
            let dataAttribute = item.getAttribute('data-name'); 
            if (dataAttribute == 'ShiftLeft') {
                item.id = 'shift-left';
            }
        })    
}

widthChanger();

const allKeys = document.querySelectorAll('.button');
const capsLockKey = document.querySelector('#capslock');
console.log(capsLockKey)

document.addEventListener('keydown', (event) => {    
    let code = event.code;
    keyDowned(code, allKeys);
    textArea.textContent += event.key;
    if(event.shiftKey) {
        allKeys.forEach(item => {
            keysUpCase(keysObj.en, item);
        })      
    }
    // =============== CAPS LOCK ================ //
    if(event.code == 'CapsLock' && capsOn == false) {
        let currentLang = getLocalStorage();
        capsOn = true;
        capsLockKey.classList.add('caps-active');

        allKeys.forEach(item => {               
            keysCapsOn(keysObj[currentLang], item);
        })            
    } else if(event.code == 'CapsLock' && capsOn == true) {
        let currentLang = getLocalStorage();
        capsOn = false;
        capsLockKey.classList.remove('caps-active');
        allKeys.forEach(item => {               
            keysLowCase(keysObj[currentLang], item);
        })        
    }
    // =============== CAPS LOCK END ================ //
    // ================ SET LANG ===================== //
    if (event.ctrlKey && event.altKey) {
        let currentLang = getLocalStorage();
        if (currentLang == 'ru') {
            setLocalStorage('en');
            currentLang = getLocalStorage();
            allKeys.forEach(item => {               
                keysLowCase(keysObj[currentLang], item);
            })        
        } else if (currentLang == 'en') {
            setLocalStorage('ru');
            currentLang = getLocalStorage();
            allKeys.forEach(item => {               
                keysLowCase(keysObj[currentLang], item);
            })    
        }       
    }
    // ================ SET LANG END ===================== //
})

document.addEventListener('keyup', (event) => {   
    let code = event.code;
    setTimeout(keyUpped, 200, code, allKeys);
    if(event.key == 'Shift') {       
        allKeys.forEach(item => {
            keysLowCase(keysObj.en, item);
        })
    }
})

// console.log(allKeys);

class Buttons {
    constructor(key, typeCase){
      this.key = key;
      this.typeCase = typeCase;
      this.keyText = key.textContent;
    }
    toUpperCase(){
      
    }
  }
class CurrentObj {
    constructor(obj, letLang){
        this.obj = obj;
        this.language = letLang;
    }
    getCurrObj(){        
        return this.obj[this.language];
    }
}
const enKeys = new CurrentObj(keysObj, lang);
const ruKeys = new CurrentObj(keysObj.ru)
// const testO = enKeys.getCurrObj();
// enKeys.getCurrObj().forEach(item => console.log(item));
// ruKeys.getCurrObj()
console.log(enKeys.getCurrObj());
// console.log(ruKeys);

  function createKeysOnLoad(obj){
    Object.keys(obj).forEach(item => {
        const rowKeysContainer = createElement('div', `row-key__container ${item}`, keyContainer); 
        createKeys(obj[`${item}`], rowKeysContainer);
    })
}

// Object.keys(keysObj.en).forEach((item, index) => {
//     // console.log(keysObj.en[`${item}`]);    

//     // keysObj.en[index].forEach(el => {
//     //     console.log(el);
//     // })
// })

// // console.log(keysObj.en.row0);
// // console.log(Object.values(keysObj.en));

// // Object.values(keysObj.en).forEach(item => {
// //     // console.log(item);
// //     Object.values(item).forEach(el =>{
// //         console.log(el);
// //     })
// // })
// console.log(Object.entries(keysObj.en)[0]);
// Object.entries(keysObj.en).forEach(e => { // e == [row[n], {row[n]Values}]
//     console.log(e[1])       // e[1] == {row[n]Values}
//     Object.entries(e[1]).forEach(el => {  // el == [name, [lowCase, upCase]]
//         // console.log(el);
//         let name = el[0];
//         let upperCase = el[1][1];
//         // console.log(name, '=', upperCase);
//     })
//     console.log('end');
// })