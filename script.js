
const amountInput = document.getElementById('amount');
const daysInput = document.getElementById('days');
const rateInput = document.getElementById('rate');
const result = document.getElementById('result');
const timeDisplay = document.querySelector('.time');
const calculateBtn = document.getElementById("calculate");


//ТАЙМЕР
function startTimer(durationSeconds) {
  let remaining = durationSeconds;

  function updateTimer() {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
    const seconds = (remaining % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (remaining > 0) {
      remaining--;
    } else {
      clearInterval(timerInterval);
    }
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}


document.addEventListener('DOMContentLoaded', () => {
  startTimer(15 * 60);
});


function updateTotal() {
  let amountInput = document.getElementById('amount');
  let daysInput = document.getElementById('days');
  let rateInput = document.getElementById('rate');
  let result = document.getElementById('result');

  let amount = parseFloat(amountInput.value) || 0;
  let days = parseInt(daysInput.value) || 0;
  let rate = parseFloat(rateInput.value) || 0;

  if (amount > 100000) {
    amount = 100000;
    amountInput.value = 100000;
  } else if (amount < 0) {
    amount = 0;
    amountInput.value = 0;
  }

  const total = amount * Math.pow(1 + (rate / 100), days);
  result.textContent = `Итого к возврату: ${total.toFixed(2)} ₽`;
}

 calculateBtn.addEventListener("click", calculateTotal);