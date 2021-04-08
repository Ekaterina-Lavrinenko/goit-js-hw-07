// const inputForm = document.getElementById('validation-input');
// const lengthForm = input.getAttribute('data-length');
// const lengthControl = perseInt(lengthForm, 6);
// console.log(lengthForm);

// inputForm.addEventListener('blur', () => {
//     if (input.value.lengthForm === lengthControl) {
//         inputForm.classList.add("valid");
//         inputForm.classList.remove("invalid");
//     } else {inputForm.classList.add("invalid");}
// })


// const inputEl = document.querySelector('#validation-input');
// const lengthForm = inputEl.getAttribute('data-length');

// console.log(inputEl.dataset.length);
// console.log(inputEl.value.length);
// inputEl.addEventListener('blur', (event) => {
//     if (event.currentTarget.dataset.length == inputEl.value.length) {
//           inputEl.classList.add("valid");
//         inputEl.classList.remove("invalid");
//     } else {inputEl.classList.add("invalid"); inputEl.classList.remove("valid");}
// })

const inputEl = document.querySelector('#validation-input');
const lengthForm = inputEl.getAttribute('data-length');
console.log(inputEl.dataset.length);
console.log(inputEl.value.length);
inputEl.addEventListener('blur', (e) => {
    if (e.currentTarget.dataset.length == inputEl.value.length) {
          inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {inputEl.classList.add('invalid'); inputEl.classList.remove('valid');}
})