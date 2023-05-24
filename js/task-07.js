const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

function changeFontSize() {
  const fontSizeChange = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSizeChange;
}
fontSizeControl.addEventListener('input', changeFontSize);
