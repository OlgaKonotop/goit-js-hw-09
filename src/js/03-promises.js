import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
// const delay = document.querySelector('[name="delay"]');
// const step = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', objForm);
// console.dir(form);
function objForm(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let delVal = Number(delay.value);
  const stepVal = Number(step.value);
  const amVal = Number(amount.value);
  console.log(delVal);
  // console.log(amount.value);
  console.log(stepVal);

  let position = 1;

  for (let i = 0; i < amVal; i += 1) {
    createPromise(position, delVal)
      .then(result => Notify.success(result))

      .catch(error => Notify.failure(error));

    position += 1;
    delVal = delVal + stepVal;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
    //delay = delay + stepDelay;
  });
}
