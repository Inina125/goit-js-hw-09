function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)

  })

}

function handleSubmit(e){
  e.preventDefault();
  const elements = form.elements;

  let delay = Number(elements.delay.value);
  let step = Number(elements.step.value);
  let amount = Number(elements.amount.value);

  for (let position = 1; position <= amount; position++){
    createPromise(position, delay)
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
    delay += step;
  }
}

const form = document.querySelector('.form');
form.addEventListener('submit',handleSubmit);