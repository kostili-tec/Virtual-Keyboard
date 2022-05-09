import nodeMaker from './create';
import keysObject from './keysObject';
import keysMaker from './keysMaker';
import keysEvents from './keysEvents';
import '../styles/style.css';
import '../scss/main.scss';

const { createContainer, createElement } = nodeMaker;

const { keysObj } = keysObject;

const {
  createKeys, keysUpCase, keysLowCase, keysCapsOn,
} = keysMaker;

const {
  keyDowned, keyUpped, getCurrentButton, printToTextarea,
} = keysEvents;
// =============== IMPORT END ================== //
// =============== DOM VARIABLES  =================== //
let capsOn = false;
let lang = 'en';

const BODY = document.querySelector('body');
const mainContainer = createContainer(BODY);
const textArea = createElement('textarea', 'textarea', mainContainer);
const keyContainer = createElement('div', 'key__container', mainContainer);
const disc = createElement('p', '', mainContainer);
const discText = 'Клавиатура создана в операционной системе Windows.\n Для переключения языка комбинация: ctrl + alt';
disc.textContent = discText;

// =============== DOM VARIABLES END =================== //
function setLocalStorage(value) {
  localStorage.setItem('langStorage', value);
}
function getLocalStorage() {
  if (localStorage.getItem('langStorage')) {
    const langGet = localStorage.getItem('langStorage');
    lang = langGet;
    return langGet;
  }
  localStorage.setItem('langStorage', lang);
  return 'en';
}

function createKeysOnLoad(obj) {
  Object.keys(obj).forEach((item) => {
    const rowKeysContainer = createElement('div', `row-key__container ${item}`, keyContainer);
    createKeys(obj[`${item}`], rowKeysContainer);
  });
}

// ============= FUNCTIONS END ============== //

const getLocalLang = getLocalStorage();

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage(getLocalLang));

createKeysOnLoad(keysObj[`${getLocalLang}`]);

function widthChanger() {
  const rowContainer4 = document.querySelector('.row4');
  const row4Elements = rowContainer4.querySelectorAll('.action-button');
  row4Elements.forEach((item) => {
    item.classList.add('row4-button');
    const dataAttribute = item.getAttribute('data-name');
    if (dataAttribute === 'Space') {
      item.setAttribute('id', 'space-button');
    }
  });
  const rowContainer3 = document.querySelector('.row3');
  const row3Elements = rowContainer3.querySelectorAll('.action-button');
  row3Elements.forEach((item) => {
    const dataAttribute = item.getAttribute('data-name');
    if (dataAttribute === 'ShiftLeft') {
      item.setAttribute('id', 'shift-left');
    }
  });
}

widthChanger();

const allKeys = document.querySelectorAll('.button');
const capsLockKey = document.querySelector('#capslock');

document.addEventListener('keydown', (event) => {
  const { code } = event;
  event.preventDefault();
  const currentButton = getCurrentButton(code, allKeys);
  keyDowned(code, allKeys);
  printToTextarea(textArea, currentButton);

  if (event.shiftKey) {
    allKeys.forEach((item) => {
      keysUpCase(keysObj[getLocalStorage()], item);
    });
  }
  // =============== CAPS LOCK ================ //
  if (event.code === 'CapsLock' && capsOn === false) {
    const currentLang = getLocalStorage();
    capsOn = true;
    capsLockKey.classList.add('caps-active');

    allKeys.forEach((item) => {
      keysCapsOn(keysObj[currentLang], item);
    });
  } else if (event.code === 'CapsLock' && capsOn === true) {
    const currentLang = getLocalStorage();
    capsOn = false;
    capsLockKey.classList.remove('caps-active');
    allKeys.forEach((item) => {
      keysLowCase(keysObj[currentLang], item);
    });
  }
  // =============== CAPS LOCK END ================ //
  // ================ SET LANG ===================== //
  if (event.ctrlKey && event.altKey) {
    let currentLang = getLocalStorage();
    if (currentLang === 'ru') {
      setLocalStorage('en');
      currentLang = getLocalStorage();

      if (capsOn === false) {
        allKeys.forEach((item) => {
          keysLowCase(keysObj[currentLang], item);
        });
      } else {
        allKeys.forEach((item) => {
          keysUpCase(keysObj[currentLang], item);
        });
      }
    } else if (currentLang === 'en') {
      setLocalStorage('ru');
      currentLang = getLocalStorage();
      if (capsOn === false) {
        allKeys.forEach((item) => {
          keysLowCase(keysObj[currentLang], item);
        });
      } else {
        allKeys.forEach((item) => {
          keysUpCase(keysObj[currentLang], item);
        });
      }
    }
  }
  // ================ SET LANG END ===================== //
});

document.addEventListener('keyup', (event) => {
  const currentLang = getLocalStorage();
  const { code } = event;
  setTimeout(keyUpped, 200, code, allKeys);
  if (event.key === 'Shift') {
    allKeys.forEach((item) => {
      keysLowCase(keysObj[currentLang], item);
    });
  }
});

/* eslint-disable */
class ClickButtons {
  constructor(elem, text) {
    this.elem = elem;
    elem.onmousedown = this.onmouseDown.bind(this);
    elem.onmouseup = this.onmouseUp.bind(this);
    this.text = text;
  }

  onmouseDown(event) {
    if (event.target.classList.contains('button')) {
      event.target.classList.add('button-press');
      printToTextarea(this.text, event.target);
    }
  }

  onmouseUp(event) {
    if (event.target.classList.contains('button-press')) {
      event.target.classList.remove('button-press');
    }
  }
}

new ClickButtons(keyContainer, textArea); // eslint-disable-line no-new
/* eslint-enable */
