import keysEn from './keysEn.js';
import keysRu from './keysRu.js';

const body = document.querySelector('body');

function createKeyboard(eng) {

  const main = document.createElement("main");
  main.classList.add("main");


  const text = document.createElement("section");
  text.classList.add("text");

  const textArea = document.createElement("textarea");
  textArea.classList.add("text__textarea");

  text.append(textArea);


  const keyboard = document.createElement("section");
  keyboard.classList.add("keyboard");


  const hotKeys = document.createElement("div");
  hotKeys.classList.add("keyboard__hotkeys");

  const langButton = document.createElement("div");
  langButton.classList.add("button-lang");

  const engButton = document.createElement("div");
  engButton.classList.add("button");
  engButton.classList.add("button_eng");
  engButton.innerHTML = 'En';

  const ruButton = document.createElement("div");
  ruButton.classList.add("button");
  ruButton.classList.add("button_ru");
  ruButton.innerHTML = 'Ru';

  langButton.append(engButton, ruButton);
  hotKeys.append(langButton);


  const keyboardBlock = document.createElement("div");
  keyboardBlock.classList.add("keyboard__block");

  for (let i = 0; i < 65; i++) {

    if (i === 13 || i === 29 || i === 42) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add("key_double-half");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);

    } else if (i === 41) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add("key_double");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);

    } else if (i === 14 || i === 28) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add("key_one-quarter");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);

    } else if (i === 56 || i === 61) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add("key_one-half");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);

    } else if (i === 59) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add("key_space");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);

    } else {
      const key = document.createElement("div");
      key.classList.add("key");

      key.innerHTML = `${eng[i].lowercase}`;
      keyboardBlock.append(key);
    }
  }

  keyboard.append(hotKeys, keyboardBlock);

  main.append(text, keyboard);

  return main;
}

body.append(createKeyboard(keysEn));