import keysEn from './keysEn.js';
import keysRu from './keysRu.js';

const body = document.querySelector('body');

function showSymbolOnKey(eng, letterCase) {
  console.log('1.1');
  const keyboardBlock = document.querySelector('.keyboard__block');
  console.log('2');
  for (let i = 0; i < 65; i += 1) {
    if (i === 13 || i === 29 || i === 42) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_double-half');
      if (i === 13) {
        key.classList.add('backspace');
      } else if (i === 29) {
        key.classList.add('caps');
      } else if (i === 42) {
        key.classList.add('shift-left');
      }

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 41) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_double');
      key.classList.add('enter');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 14 || i === 28) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_one-quarter');
      if (i === 14) {
        key.classList.add('tab');
      } else if (i === 28) {
        key.classList.add('del');
      }

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 56 || i === 61) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_one-half');
      if (i === 56) {
        key.classList.add('ctrl-left');
      } else if (i === 61) {
        key.classList.add('ctrl-right');
      }

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 57) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('win');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 59) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_space');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 54) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-up');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 62) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-left');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 63) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-down');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 64) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-right');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 55) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('shift-right');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 58) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('alt-left');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 60) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('alt-right');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    } else {
      const key = document.createElement('div');
      key.classList.add('key');

      key.innerHTML = `${eng[i][letterCase]}`;
      keyboardBlock.append(key);
    }
  }
  console.log('3');
}

function createKeyboard() {
  const main = document.createElement('main');
  main.classList.add('main');

  const text = document.createElement('section');
  text.classList.add('text');

  const textArea = document.createElement('textarea');
  textArea.classList.add('text__textarea');
  textArea.setAttribute('autofocus', 'autofocus');

  text.append(textArea);

  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');

  const hotKeys = document.createElement('div');
  hotKeys.classList.add('keyboard__hotkeys');

  const langButton = document.createElement('div');
  langButton.classList.add('button-lang');

  const engButton = document.createElement('div');
  engButton.classList.add('button');
  engButton.classList.add('button_eng');
  engButton.innerHTML = 'En';

  const ruButton = document.createElement('div');
  ruButton.classList.add('button');
  ruButton.classList.add('button_ru');
  ruButton.innerHTML = 'Ru';

  langButton.append(engButton, ruButton);

  const capsButton = document.createElement('div');
  capsButton.classList.add('button_caps');

  hotKeys.append(langButton, capsButton);

  const keyboardBlock = document.createElement('div');
  keyboardBlock.classList.add('keyboard__block');

  keyboard.append(hotKeys, keyboardBlock);

  main.append(text, keyboard);

  return main;
}

body.append(createKeyboard());
showSymbolOnKey(keysEn, 'lowercase');

function clickKeyMouse() {
  const keys = document.querySelectorAll('.key');
  const keyboardBlock = document.querySelector('.keyboard__block');
  const textArea = document.querySelector('textarea');
  const buttonCaps = document.querySelector('.button_caps'); 

  keyboardBlock.addEventListener('click', (event) => {
    keys.forEach((key) => {
      key.classList.remove('key_active');
    });

    if (event.target.classList.contains('key')) {
      if (event.target.classList.contains('backspace')) {

      } else if (event.target.classList.contains('tab')) {

      } else if (event.target.classList.contains('del')) {

      } else if (event.target.classList.contains('caps')) {
        if (keys[21].textContent === keys[21].textContent.toLowerCase()) {
          for (let i = 0; i < 65; i += 1) {
            keys[i].innerHTML = keysEn[i].uppercase;
          }
          buttonCaps.classList.add('button_caps-active');
        } else {
          for (let i = 0; i < 65; i += 1) {
              keys[i].innerHTML = keysEn[i].lowercase;
          }
          buttonCaps.classList.remove('button_caps-active');
        }
        
      } else if (event.target.classList.contains('enter')) {
        textArea.textContent += '\n';
      } else if (event.target.classList.contains('shift')) {

      } else if (event.target.classList.contains('ctrl')) {

      } else {
        textArea.textContent += event.target.textContent;
      }
      event.target.classList.add('key_active');
    }
  });

  // for (let i = 0; i < keys.length; i++) {

  //   const key = keys[i];
  //   key.addEventListener('click', function() {
  //     key.classList.toggle('key_active');
  //   });

  //   key.classList.remove('key_active');
  // }
}

clickKeyMouse();

function clickKeyKeyboard() {
  const keys = document.querySelectorAll('.key');

  document.addEventListener('keydown', (event) => {
    document.querySelector('textarea').focus();

    keys.forEach((key) => {
      key.classList.remove('key_active');
    });

    console.log(event.key);
    console.log(event);
    if (event.code === 'ControlLeft') {
      document.querySelector('.ctrl-left').classList.add('key_active');
    } else if (event.code === 'ControlRight') {
      document.querySelector('.ctrl-right').classList.add('key_active');
    } else if (event.code === 'AltLeft') {
      document.querySelector('.alt-left').classList.add('key_active');
    } else if (event.code === 'AltRight') {
      document.querySelector('.alt-right').classList.add('key_active');
    } else if (event.code === 'ShiftLeft') {
      document.querySelector('.shift-left').classList.add('key_active');
    } else if (event.code === 'ShiftRight') {
      document.querySelector('.shift-right').classList.add('key_active');
    } else if (event.key === 'Delete') {
      document.querySelector('.del').classList.add('key_active');
    } else if (event.key === 'Meta') {
      document.querySelector('.win').classList.add('key_active');
    } else if (event.key === 'ArrowLeft') {
      document.querySelector('.arrow-left').classList.add('key_active');
    } else if (event.key === 'ArrowUp') {
      document.querySelector('.arrow-up').classList.add('key_active');
    } else if (event.key === 'ArrowRight') {
      document.querySelector('.arrow-right').classList.add('key_active');
    } else if (event.key === 'ArrowDown') {
      document.querySelector('.arrow-down').classList.add('key_active');
    } else {
      keys.forEach((key) => {
        if (key.textContent === event.key) {
          console.log(event);
          key.classList.add('key_active');
          // } else if () {

        }
      });
    }

    // document.querySelector().classList.add('key_active');
  })
}

clickKeyKeyboard();

function choiceLang() {
  const langButton = document.querySelector('.button-lang');
  const buttons = langButton.querySelectorAll('.button');

  for (let i = 0; i < buttons.length; i += 1) {
    const button = buttons[i];

    button.addEventListener('click', () => {
      button.classList.toggle('button_active');
    });
  }
}

choiceLang();
