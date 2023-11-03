const body = document.querySelector("body");
const text = document.querySelector("p")
let count = 12;

const changeBackground = (value) => {
  if (value === 'fBranco') {
    body.style.backgroundColor = 'white';
  };
  if (value === 'fPreto') {
    body.style.backgroundColor = 'black';
  };
};

const changeText = (value) => {
  if (value === 'pBranca') {
    text.style.color = 'white';
  };
  if (value === 'pPreta') {
    text.style.color = 'black';
  };
};

const changeSizeText = (value) => {
  
  if (value === 'grande') {
    count += 5;
    text.style.fontSize = `${count}px`;
  };
  if (value === 'pequeno') {
    count -= 5;
    text.style.fontSize = `${count}px`;
  };
};

const upperCase = () => {
  text.innerText = text.innerText.toUpperCase();
};

const lowerCase = () => {
  text.innerText = text.innerText.toLowerCase();
};
