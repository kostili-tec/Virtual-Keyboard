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

export default {keyDowned, keyUpped};