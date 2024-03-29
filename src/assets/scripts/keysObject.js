const keysObj = {
  en: {
    row0: {
      Backquote: ['`', '~'],
      Digit1: ['1', '!'],
      Digit2: ['2', '@'],
      Digit3: ['3', '#'],
      Digit4: ['4', '$'],
      Digit5: ['5', '%'],
      Digit6: ['6', '^'],
      Digit7: ['7', '&'],
      Digit8: ['8', '*'],
      Digit9: ['9', '('],
      Digit0: ['0', ')'],
      Minus: ['-', '_'],
      Equal: ['=', '+'],
      Backspace: ['Backspace', 'Backspace'],
    },
    row1: {
      Tab: ['Tab', 'Tab'],
      KeyQ: ['q', 'Q'],
      KeyW: ['w', 'W'],
      KeyE: ['e', 'E'],
      KeyR: ['r', 'R'],
      KeyT: ['t', 'T'],
      KeyY: ['y', 'Y'],
      KeyU: ['u', 'U'],
      KeyI: ['i', 'I'],
      KeyO: ['o', 'O'],
      KeyP: ['p', 'P'],
      BracketLeft: ['[', '{'],
      BracketRight: [']', '}'],
      Delete: ['Delete', 'Delete'],
    },
    row2: {
      CapsLock: ['Caps Lock', 'Caps Lock'],
      KeyA: ['a', 'A'],
      KeyS: ['s', 'S'],
      KeyD: ['d', 'D'],
      KeyF: ['f', 'F'],
      KeyG: ['g', 'G'],
      KeyH: ['h', 'H'],
      KeyJ: ['j', 'J'],
      KeyK: ['k', 'K'],
      KeyL: ['l', 'L'],
      Semicolon: [';', ':'],
      Quote: ['\'', '\''],
      Backslash: ['\\', '|'],
      Enter: ['Enter', 'Enter'],
    },
    row3: {
      ShiftLeft: ['Shift', 'Shift'],
      KeyZ: ['z', 'Z'],
      KeyX: ['x', 'X'],
      KeyC: ['c', 'C'],
      KeyV: ['v', 'V'],
      KeyB: ['b', 'B'],
      KeyN: ['n', 'N'],
      KeyM: ['m', 'M'],
      Comma: [',', '<'],
      Period: ['.', '>'],
      Slash: ['/', '?'],
      ArrowUp: ['▲', '▲'],
      ShiftRight: ['Shift', 'Shift'],
    },
    row4: {
      ControlLeft: ['Ctrl', 'Ctrl'],
      MetaLeft: ['Win', 'Win'],
      AltLeft: ['Alt', 'Alt'],
      Space: ['Space', 'Space'],
      AltRight: ['Alt', 'Alt'],
      ArrowLeft: ['◄', '◄'],
      ArrowDown: ['▼', '▼'],
      ArrowRight: ['►', '►'],
      ControlRight: ['Ctrl', 'Ctrl'],
    },
  },
  ru: {
    row0: {
      Backquote: ['ё', 'Ё'],
      Digit1: ['1', '!'],
      Digit2: ['2', '@'],
      Digit3: ['3', '#'],
      Digit4: ['4', '$'],
      Digit5: ['5', '%'],
      Digit6: ['6', '^'],
      Digit7: ['7', '&'],
      Digit8: ['8', '*'],
      Digit9: ['9', '('],
      Digit0: ['0', ')'],
      Minus: ['-', '_'],
      Equal: ['=', '+'],
      Backspace: ['Backspace', 'Backspace'],
    },
    row1: {
      Tab: ['Tab', 'Tab'],
      KeyQ: ['й', 'Й'],
      KeyW: ['ц', 'Ц'],
      KeyE: ['у', 'У'],
      KeyR: ['к', 'К'],
      KeyT: ['е', 'Е'],
      KeyY: ['н', 'Н'],
      KeyU: ['г', 'Г'],
      KeyI: ['ш', 'Ш'],
      KeyO: ['щ', 'Щ'],
      KeyP: ['з', 'З'],
      BracketLeft: ['х', 'Х'],
      BracketRight: ['ъ', 'Ъ'],
      Delete: ['Delete', 'Delete'],
    },
    row2: {
      CapsLock: ['Caps Lock', 'Caps Lock'],
      KeyA: ['ф', 'Ф'],
      KeyS: ['ы', 'Ы'],
      KeyD: ['в', 'В'],
      KeyF: ['а', 'А'],
      KeyG: ['п', 'П'],
      KeyH: ['р', 'Р'],
      KeyJ: ['о', 'О'],
      KeyK: ['л', 'Л'],
      KeyL: ['д', 'Д'],
      Semicolon: ['ж', 'Ж'],
      Quote: ['э', 'Э'],
      Backslash: ['\\', '/'],
      Enter: ['Enter', 'Enter'],
    },
    row3: {
      ShiftLeft: ['Shift', 'Shift'],
      KeyZ: ['я', 'Я'],
      KeyX: ['ч', 'Ч'],
      KeyC: ['с', 'С'],
      KeyV: ['м', 'М'],
      KeyB: ['и', 'И'],
      KeyN: ['т', 'Т'],
      KeyM: ['ь', 'Ь'],
      Comma: ['б', 'Б'],
      Period: ['ю', 'Ю'],
      Slash: ['.', ','],
      ArrowUp: ['▲', '▲'],
      ShiftRight: ['Shift', 'Shift'],
    },
    row4: {
      ControlLeft: ['Ctrl', 'Ctrl'],
      MetaLeft: ['Win', 'Win'],
      AltLeft: ['Alt', 'Alt'],
      Space: ['Space', 'Space'],
      AltRight: ['Alt', 'Alt'],
      ArrowLeft: ['◄', '◄'],
      ArrowDown: ['▼', '▼'],
      ArrowRight: ['►', '►'],
      ControlRight: ['Ctrl', 'Ctrl'],
    },
  },
};

const actionButtonsArr = ['Backspace', 'Tab', 'Delete',
  'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win',
  'Alt', 'Space'];

export default { keysObj, actionButtonsArr };
