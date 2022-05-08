function keyDowned(event, buttons) {
    buttons.forEach(el => {
        const dataAttribute = el.getAttribute('data-name');
        if (dataAttribute == event) {
            el.classList.add('button-press');
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

function capsDeactivate(buttons) {
    buttons.forEach(item => {
        const dataName = item.getAttribute('data-name');
        if (dataName == 'CapsLock'){
            item.classList.remove('caps-active');
        }           
    })
}

export default {keyDowned, keyUpped,  capsDeactivate};