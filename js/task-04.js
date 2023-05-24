const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

updateCounter();

function decrement() {
  counterValue -= 1;
  updateCounter();
}

function increment() {
  counterValue += 1;
  updateCounter();
}
decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

// Aktualizacja widoku wartości licznika
function updateCounter() {
  valueSpan.textContent = counterValue;
}
