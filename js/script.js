import keysEn from './keysEn.js';
import keysRu from './keysRu.js';

const body = document.querySelector('body');
let lang = 'Ru';
let letterCase = 'lowercase';

function showSymbolOnKey(lang, letterCase) {
  const keyboardBlock = document.querySelector('.keyboard__block');

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

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 41) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_double');
      key.classList.add('enter');

      key.innerHTML = `${lang[i][letterCase]}`;
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

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if ((i > 14 && i < 25) || (i > 29 && i < 39) || (i > 42 && i < 50)) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('letter');

      key.innerHTML = `${lang[i][letterCase]}`;
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

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 57) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('win');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 59) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('key_space');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 54) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-up');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 62) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-left');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 63) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-down');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 64) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('arrow-right');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 55) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('shift-right');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 58) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('alt-left');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else if (i === 60) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add('alt-right');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    } else {
      const key = document.createElement('div');
      key.classList.add('key');

      key.innerHTML = `${lang[i][letterCase]}`;
      keyboardBlock.append(key);
    }
  }
}

function createKeyboard() {
  const main = document.createElement('main');
  main.classList.add('main');

  const text = document.createElement('section');
  text.classList.add('text');

  const textArea = document.createElement('textarea');
  textArea.classList.add('text__textarea');
  textArea.setAttribute('autofocus', 'autofocus');
  textArea.setAttribute('rows', '7');

  text.append(textArea);

  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');

  const hotKeys = document.createElement('div');
  hotKeys.classList.add('keyboard__hotkeys');

  // const langButton = document.createElement('div');
  // langButton.classList.add('button-lang');

  // const engButton = document.createElement('div');
  // engButton.classList.add('button');
  // engButton.classList.add('button_eng');
  // engButton.innerHTML = 'En';

  // const ruButton = document.createElement('div');
  // ruButton.classList.add('button');
  // ruButton.classList.add('button_ru');
  // ruButton.innerHTML = 'Ru';

  // langButton.append(engButton, ruButton);

  const capsButton = document.createElement('div');
  capsButton.classList.add('button_caps');

  const hotkeys = document.createElement('p');
  hotkeys.classList.add('hotkeys');
  hotkeys.innerHTML = 'Switched language - Left Shift + Left Alt';

  const notice = document.createElement('p');
  notice.classList.add('notice');
  notice.innerHTML = 'The keyboard is implemented on the OS Windows';

  hotKeys.append(capsButton, hotkeys, notice);

  const keyboardBlock = document.createElement('div');
  keyboardBlock.classList.add('keyboard__block');

  keyboard.append(hotKeys, keyboardBlock);

  main.append(text, keyboard);

  return main;
}

body.append(createKeyboard());

if (lang === 'En') {
  showSymbolOnKey(keysEn, letterCase);
} else {
  showSymbolOnKey(keysRu, letterCase);
}

// function showSymbols(lang) {
//   const keys = document.querySelectorAll('.key');
//   for (let i = 0; i < 65; i += 1) {
//     keys[i].innerHTML = lang[i].lowercase;
//   }
// }

function clickKeyMouse() {
  const keys = document.querySelectorAll('.key');
  const keyboardBlock = document.querySelector('.keyboard__block');
  const textArea = document.querySelector('textarea');
  const buttonCaps = document.querySelector('.button_caps'); 

  keyboardBlock.addEventListener('click', (event) => {
    textArea.focus();

    keys.forEach((key) => {
      key.classList.remove('key_active');
    });

    if (event.target.classList.contains('key')) {
      if (event.target.classList.contains('backspace')) {

      } else if (event.target.classList.contains('tab')) {

      } else if (event.target.classList.contains('del')) {

      } else if (event.target.classList.contains('caps')) {
        if (lang === 'En') {
          if (keys[15].textContent === keys[15].textContent.toLowerCase()) {
            letterCase = 'uppercase';
            for (let i = 0; i < 65; i += 1) {
              if (keys[i].classList.contains('letter')) {
                keys[i].innerHTML = keysEn[i].uppercase;
              }
            }
            buttonCaps.classList.add('button_caps-active');
          } else {
            letterCase = 'lowercase';
            for (let i = 0; i < 65; i += 1) {
              if (keys[i].classList.contains('letter')) {
                keys[i].innerHTML = keysEn[i].lowercase;
              }
            }
            buttonCaps.classList.remove('button_caps-active');
          }
        } else {
          if (keys[15].textContent === keys[15].textContent.toLowerCase()) {
            letterCase = 'uppercase';
            for (let i = 0; i < 65; i += 1) {
              if (keys[i].classList.contains('letter')) {
                keys[i].innerHTML = keysRu[i].uppercase;
              }
            }
            buttonCaps.classList.add('button_caps-active');
          } else {
            letterCase = 'lowercase';
            for (let i = 0; i < 65; i += 1) {
              if (keys[i].classList.contains('letter')) {
                keys[i].innerHTML = keysRu[i].lowercase;
              }
            }
            buttonCaps.classList.remove('button_caps-active');
          }
        }
        document.querySelector('.caps').classList.add('key_active');
      } else if (event.target.classList.contains('enter')) {
        textArea.value += '\n';
      } else if (event.target.classList.contains('shift')) {

      } else if (event.target.classList.contains('ctrl')) {

      } else {
        textArea.value += event.target.textContent;
      }
      event.target.classList.add('key_active');
    }
  
    // keys.forEach((key) => {
    //   key.classList.remove('key_active');
    // });
  
  });
}

clickKeyMouse();

function clickKeyKeyboard() {
  const keys = document.querySelectorAll('.key');
  const textArea = document.querySelector('.text__textarea');
  const buttonCaps = document.querySelector('.button_caps');

  document.addEventListener('keydown', (event) => {
    textArea.focus();
    // console.log(event.key);
    // console.log(event);
    if (event.code === 'ControlLeft') {
      event.preventDefault();
      document.querySelector('.ctrl-left').classList.add('key_active');
    } else if (event.code === 'ControlRight') {
      event.preventDefault();
      document.querySelector('.ctrl-right').classList.add('key_active');
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
      if (document.querySelector('.shift-left').classList.contains('key_active') || document.querySelector('.shift-right').classList.contains('key_active')) {
        console.log(lang);
        if (lang === 'En') {
          lang = 'Ru';
          // if (document.querySelector('.buttons_caps').classList.contains('buttons_caps-active')) {
          //   for (let i = 0; i < 65; i += 1) {
          //     keys[i].innerHTML = keysRu[i].uppercase;
          //   }
          //     // if (keys[i].classList.contains('letter')) {
          //     //   keys[i].innerHTML = keysEn[i].uppercase;
          //     // }
          // } else {
          //   for (let i = 0; i < 65; i += 1) {
          //     keys[i].innerHTML = keysRu[i].lowercase;
          //   }
          // }
        } else {
          lang = 'En';
          // if (document.querySelector('.buttons_caps').classList.contains('buttons_caps-active')) {
          //   for (let i = 0; i < 65; i += 1) {
          //     keys[i].innerHTML = keysEn[i].uppercase;
          //   }
          // } else {
          //   for (let i = 0; i < 65; i += 1) {
          //     keys[i].innerHTML = keysEn[i].lowercase;
          //   }
          // }
        }
        console.log(lang);
      }
      document.querySelector('.alt-left').classList.add('key_active');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
      document.querySelector('.alt-right').classList.add('key_active');
    } else if (event.code === 'ShiftLeft') {
      if (lang === 'En') {
        for (let i = 0; i < 65; i += 1) {
          keys[i].innerHTML = keysEn[i].uppercase;
        }
      } else {
        for (let i = 0; i < 65; i += 1) {
          keys[i].innerHTML = keysRu[i].uppercase;
        }
      }
      document.querySelector('.shift-left').classList.add('key_active');
    } else if (event.code === 'ShiftRight') {
      for (let i = 0; i < 65; i += 1) {
        keys[i].innerHTML = keysEn[i].uppercase;
      }
      document.querySelector('.shift-right').classList.add('key_active');
    } else if (event.key === 'Delete') {
      document.querySelector('.del').classList.add('key_active');
    } else if (event.key === 'Meta') {
      event.preventDefault();
      document.querySelector('.win').classList.add('key_active');
    } else if (event.key === 'ArrowLeft') {
      document.querySelector('.arrow-left').classList.add('key_active');
    } else if (event.key === 'ArrowUp') {
      document.querySelector('.arrow-up').classList.add('key_active');
    } else if (event.key === 'ArrowRight') {
      document.querySelector('.arrow-right').classList.add('key_active');
    } else if (event.key === 'ArrowDown') {
      document.querySelector('.arrow-down').classList.add('key_active');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      textArea.value = textArea.value + '\t';
      document.querySelector('.tab').classList.add('key_active');
    } else if (event.code === 'CapsLock') {
      if (lang === 'En') {
        if (keys[15].textContent === keys[15].textContent.toLowerCase()) {
          letterCase = 'uppercase';
          for (let i = 0; i < 65; i += 1) {
            if (keys[i].classList.contains('letter')) {
              keys[i].innerHTML = keysEn[i].uppercase;
            }
          }
          buttonCaps.classList.add('button_caps-active');
        } else {
          letterCase = 'lowercase';
          for (let i = 0; i < 65; i += 1) {
            if (keys[i].classList.contains('letter')) {
              keys[i].innerHTML = keysEn[i].lowercase;
            }
          }
          buttonCaps.classList.remove('button_caps-active');
        }
      } else {
        if (keys[15].textContent === keys[15].textContent.toLowerCase()) {
          letterCase = 'uppercase';
          for (let i = 0; i < 65; i += 1) {
            if (keys[i].classList.contains('letter')) {
              keys[i].innerHTML = keysRu[i].uppercase;
            }
          }
          buttonCaps.classList.add('button_caps-active');
        } else {
          letterCase = 'lowercase';
          for (let i = 0; i < 65; i += 1) {
            if (keys[i].classList.contains('letter')) {
              keys[i].innerHTML = keysRu[i].lowercase;
            }
          }
          buttonCaps.classList.remove('button_caps-active');
        }
      }
      document.querySelector('.caps').classList.add('key_active');
    } else {
      keys.forEach((key) => {
        if (key.textContent === event.key) {
          // console.log(event);
          key.classList.add('key_active');
        }
      });
    }
  })

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft') {
      if (lang === 'En') {
          for (let i = 0; i < 65; i += 1) {
            keys[i].innerHTML = keysEn[i][letterCase];
          }
          for (let i = 0; i < 65; i += 1) {
            keys[i].innerHTML = keysEn[i][letterCase];
          }
      } else {
          for (let i = 0; i < 65; i += 1) {
            keys[i].innerHTML = keysRu[i][letterCase];
          }
          for (let i = 0; i < 65; i += 1) {
            keys[i].innerHTML = keysRu[i][letterCase];
          }
      }
      document.querySelector('.shift-left').classList.remove('key_active');
    } else if (event.code === 'ShiftRight') {
      for (let i = 0; i < 65; i += 1) {
        keys[i].innerHTML = keysEn[i].lowercase;
      }
      document.querySelector('.shift-right').classList.remove('key_active');
    } else if (event.code === 'ControlLeft') {
      document.querySelector('.ctrl-left').classList.remove('key_active');
    } else if (event.code === 'ControlRight') {
      document.querySelector('.ctrl-right').classList.remove('key_active');
    } else if (event.code === 'AltLeft') {
      document.querySelector('.alt-left').classList.remove('key_active');
    } else if (event.code === 'AltRight') {
      document.querySelector('.alt-right').classList.remove('key_active');
    } else if (event.key === 'Delete') {
      document.querySelector('.del').classList.remove('key_active');
    } else if (event.key === 'Meta') {
      document.querySelector('.win').classList.remove('key_active');
    } else if (event.key === 'ArrowLeft') {
      document.querySelector('.arrow-left').classList.remove('key_active');
    } else if (event.key === 'ArrowUp') {
      document.querySelector('.arrow-up').classList.remove('key_active');
    } else if (event.key === 'ArrowRight') {
      document.querySelector('.arrow-right').classList.remove('key_active');
    } else if (event.key === 'ArrowDown') {
      document.querySelector('.arrow-down').classList.remove('key_active');
    } else {
      keys.forEach((key) => {
        if (event.key === key.textContent) {
          key.classList.remove('key_active');
        }
      });
    }
  });
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
