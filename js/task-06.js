const inputValue = document.querySelector('#validation-input');
const dataLength = inputValue.getAttribute('data-length');
inputValue.addEventListener('blur', (event) => {
  if (event.target.value.length >= dataLength) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
  } else {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
  }
});
