function keyDowned(event, buttons) {
    buttons.forEach(el => {
        const dataAttribute = el.getAttribute('data-name');
        if (dataAttribute == event) {
            el.classList.add('button-press');
            return el;
        }
    })
}

function keyUpped(event, buttons){
    buttons.forEach(el => {
        const dataAttribute = el.getAttribute('data-name');
        if (dataAttribute == event) {
            el.classList.remove('button-press');
        }
    })
}

function getCurrentButton(event, buttons){
    let currentButton;
    buttons.forEach(el => {
        const dataAttribute = el.getAttribute('data-name');
        if (dataAttribute == event) {            
            currentButton = el;              
        }
    })
    return currentButton;
}
function printToTextarea(textarea, button, buttons){
    let text = button.textContent;
    switch(text){
        case 'Shift':
            textarea.textContent += '';
            break;
        case 'Ctrl':
            textarea.textContent += '';
            break;
        case 'Caps Lock':
            textarea.textContent += '';
            break;
        case 'Space':
            textarea.textContent += ' ';
            break;
        case 'Delete':
            textarea.textContent += ' ';
            break;
        case 'Tab':
            textarea.textContent += '\t';
            break;
        case 'Enter':
            textarea.textContent += '\n';
            break;
        case 'Backspace':
            let currentText = textarea.textContent;
            textarea.textContent = currentText.substring(0, currentText.length - 1);
            break;
        default: 
            textarea.textContent += text;
            break;
    }
}

function capsDeactivate(buttons) {
    buttons.forEach(item => {
        const dataName = item.getAttribute('data-name');
        if (dataName == 'CapsLock'){
            item.classList.remove('caps-active');
        }           
    })
}

export default {keyDowned, keyUpped, getCurrentButton, printToTextarea, capsDeactivate};