const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});

incrementBtnEl.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});
