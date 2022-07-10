const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
}

const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const counterValueEl = document.querySelector('#value');


decrBtn.addEventListener('click', function () {
    counterValue.decrement();
    counterValueEl.textContent = counterValue.value;
})

incrBtn.addEventListener('click', function () {
    counterValue.increment();
    counterValueEl.textContent = counterValue.value;
})