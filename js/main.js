const buttons = document.querySelectorAll('.color-list input');
const brownButton = document.querySelector('#brown-macaron');
const greenButton = document.querySelector('#green-macaron');
const yellowButton = document.querySelector('#yellow-macaron');
const whiteButton = document.querySelector('#white-macaron');
const pinkButton = document.querySelector('#pink-macaron');

const macarons = document.querySelector('.macarons');

const brownMatrix =
  'matrix(1.48785, 1.08915, -1.08915, 1.48785, 143.639, 537.221)';
const greenMatrix =
  'matrix(1.62036, 0.76141, -0.76141, 1.62036, -180.387, 245.514)';
const yellowMatrix =
  'matrix(1.58304, 0.279061, -0.279061, 1.58304, -468.862, 132.262)';
const whiteMatrix =
  'matrix(1.33282, -0.183277, 0.183277, 1.33282, -612.59, 94.64)';
const pinkMatrix =
  'matrix(1.02317, -0.455545, 0.455545, 1.02317, -782.56, 178.41)';

setTimeout(() => {
  pinkButton.checked = true;
  if (pinkButton.checked) {
    macarons.style.transform = pinkMatrix;
  }
}, 1000);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (brownButton.checked) {
      macarons.style.transform = brownMatrix;
    }
    if (greenButton.checked) {
      macarons.style.transform = greenMatrix;
    }
    if (yellowButton.checked) {
      macarons.style.transform = yellowMatrix;
    }
    if (whiteButton.checked) {
      macarons.style.transform = whiteMatrix;
    }
    if (pinkButton.checked) {
      macarons.style.transform = pinkMatrix;
    }
  });
});
