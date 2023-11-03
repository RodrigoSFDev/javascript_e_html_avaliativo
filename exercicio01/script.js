const body = document.querySelector("body");

const changeBackground = (value) => {
  if (value === 'Vermelho') {
    body.style.backgroundColor = 'red';
  };
  if (value === 'Verde') {
    body.style.backgroundColor = 'green';
  };
  if (value === 'Azul') {
    body.style.backgroundColor = 'blue';
  };
  if (value === 'Amarelo') {
    body.style.backgroundColor  = 'yellow';
  };
};
