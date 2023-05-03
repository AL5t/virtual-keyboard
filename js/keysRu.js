const keysRu = [
  {
    lowercase: 'ё',
    uppercase: 'Ё',
    code: 'Backquote',
  },
  {
    lowercase: '1',
    uppercase: '!',
    code: 'Digit1',
  },
  {
    lowercase: '2',
    uppercase: '"',
    code: 'Digit2',
  },
  {
    lowercase: '3',
    uppercase: '№',
    code: 'Digit3',
  },
  {
    lowercase: '4',
    uppercase: ';',
    code: 'Digit4',
  },
  {
    lowercase: '5',
    uppercase: '%',
    code: 'Digit5',
  },
  {
    lowercase: '6',
    uppercase: ':',
    code: 'Digit6',
  },
  {
    lowercase: '7',
    uppercase: '?',
    code: 'Digit7',
  },
  {
    lowercase: '8',
    uppercase: '*',
    code: 'Digit8',
  },
  {
    lowercase: '9',
    uppercase: '(',
    code: 'Digit9',
  },
  {
    lowercase: '0',
    uppercase: ')',
    code: 'Digit0',
  },
  {
    lowercase: '-',
    uppercase: '_',
    code: 'Minus',
  },
  {
    lowercase: '=',
    uppercase: '+',
    code: 'Equal',
  },
  {
    lowercase: 'Backspace',
    uppercase: 'Backspace',
    code: 'Backspace',
  },
  {
    lowercase: 'Tab',
    uppercase: 'Tab',
    code: 'Tab',
  },
  {
    lowercase: 'й',
    uppercase: 'Й',
    code: 'KeyQ',
  },
  {
    lowercase: 'ц',
    uppercase: 'Ц',
    code: 'KeyW',
  },
  {
    lowercase: 'у',
    uppercase: 'У',
    code: 'KeyE',
  },
  {
    lowercase: 'к',
    uppercase: 'К',
    code: 'KeyR',
  },
  {
    lowercase: 'е',
    uppercase: 'Е',
    code: 'KeyT',
  },
  {
    lowercase: 'н',
    uppercase: 'Н',
    code: 'KeyY',
  },
  {
    lowercase: 'г',
    uppercase: 'Г',
    code: 'KeyU',
  },
  {
    lowercase: 'ш',
    uppercase: 'Ш',
    code: 'KeyI',
  },
  {
    lowercase: 'щ',
    uppercase: 'Щ',
    code: 'KeyO',
  },
  {
    lowercase: 'з',
    uppercase: 'З',
    code: 'KeyP',
  },
  {
    lowercase: 'х',
    uppercase: 'Х',
    code: 'BracketLeft',
  },
  {
    lowercase: 'ъ',
    uppercase: 'Ъ',
    code: 'BracketRight',
  },
  {
    lowercase: '\\',
    uppercase: '/',
    code: 'Backslash',
  },
  {
    lowercase: 'Del',
    uppercase: 'Del',
    code: 'Delete',
  },
  {
    lowercase: 'CapsLock',
    uppercase: 'CapsLock',
    code: 'CapsLock',
  },
  {
    lowercase: 'ф',
    uppercase: 'Ф',
    code: 'KeyA',
  },
  {
    lowercase: 'ы',
    uppercase: 'Ы',
    code: 'KeyS',
  },
  {
    lowercase: 'в',
    uppercase: 'В',
    code: 'KeyD',
  },
  {
    lowercase: 'а',
    uppercase: 'А',
    code: 'KeyF',
  },
  {
    lowercase: 'п',
    uppercase: 'П',
    code: 'KeyG',
  },
  {
    lowercase: 'р',
    uppercase: 'Р',
    code: 'KeyH',
  },
  {
    lowercase: 'о',
    uppercase: 'О',
    code: 'KeyJ',
  },
  {
    lowercase: 'л',
    uppercase: 'Л',
    code: 'KeyK',
  },
  {
    lowercase: 'д',
    uppercase: 'Д',
    code: 'KeyL',
  },
  {
    lowercase: 'ж',
    uppercase: 'Ж',
    code: 'Semicolon',
  },
  {
    lowercase: 'э',
    uppercase: 'Э',
    code: 'Quote',
  },
  {
    lowercase: 'Enter',
    uppercase: 'Enter',
    code: 'Enter',
  },
  {
    lowercase: 'Shift',
    uppercase: 'Shift',
    code: 'ShiftLeft',
  },
  {
    lowercase: 'я',
    uppercase: 'Я',
    code: 'KeyZ',
  },
  {
    lowercase: 'ч',
    uppercase: 'Ч',
    code: 'KeyX',
  },
  {
    lowercase: 'с',
    uppercase: 'С',
    code: 'KeyC',
  },
  {
    lowercase: 'м',
    uppercase: 'М',
    code: 'KeyV',
  },
  {
    lowercase: 'и',
    uppercase: 'И',
    code: 'KeyB',
  },
  {
    lowercase: 'т',
    uppercase: 'Т',
    code: 'KeyN',
  },
  {
    lowercase: 'ь',
    uppercase: 'Ь',
    code: 'KeyM',
  },
  {
    lowercase: 'б',
    uppercase: 'Б',
    code: 'Comma',
  },
  {
    lowercase: 'ю',
    uppercase: 'Ю',
    code: 'Period',
  },
  {
    lowercase: '.',
    uppercase: ',',
    code: 'Slash',
  },
  {
    lowercase: '&#9650',
    uppercase: '&#9650',
    code: 'ArrowUp',
  },
  {
    lowercase: 'Shift',
    uppercase: 'Shift',
    code: 'ShiftRight',
  },
  {
    lowercase: 'Ctrl',
    uppercase: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    lowercase: 'Win',
    uppercase: 'Win',
    code: 'MetaLeft',
  },
  {
    lowercase: 'Alt',
    uppercase: 'Alt',
    code: 'AltLeft',
  },
  {
    lowercase: ' ',
    uppercase: ' ',
    code: 'Space',
  },
  {
    lowercase: 'Alt',
    uppercase: 'Alt',
    code: 'AltRight',
  },
  {
    lowercase: 'Ctrl',
    uppercase: 'Ctrl',
    code: 'ControlRight',
  },
  {
    lowercase: '&#9668',
    uppercase: '&#9668',
    code: 'ArrowLeft',
  },
  {
    lowercase: '&#9660',
    uppercase: '&#9660',
    code: 'ArrowDown',
  },
  {
    lowercase: '&#9658',
    uppercase: '&#9658',
    code: 'ArrowRight',
  },
];

export default keysRu;
