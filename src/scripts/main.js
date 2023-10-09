'use strict';

const logo = document.querySelector('.logo');
const {body} = document;

function scenario(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve();
  })

  setTimeout(() => {
    reject();
  }, 3000)
}

const promise = new Promise(scenario);

promise
  .then(function() {
    body.insertAdjacentHTML('beforeend', `
      <div class="message">Promise was resolved!</div>
    `)
  })
  .catch(() => body.insertAdjacentHTML('beforeend', `
      <div class="message error-message">Promise was rejected!<div/>
  `))
