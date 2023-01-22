// Створіть програму секундомір.
// * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
// * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ГГ:ХХ:СС
// * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
let secondField = document.querySelector('#secondField');
let minuteField = document.querySelector('#minuteField');
let hourField = document.querySelector('#hourField');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');

startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startReadout, 1000)
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    resetReadout();
});

let hour = 0,
    minute = 0, 
    second = 0,
    interval;

const startReadout = () => {
    second++;
    if (second < 10) {
        secondField.innerHTML = '0' + second
    }
    if (second >= 10) {
        secondField.innerHTML = second
    }
    if (second > 59) {
        minute++;
        if (minute < 10) {
            minuteField.innerHTML = '0' + minute;
        }
        if (minute >= 10) {
            minuteField.innerHTML = minute;
        }
        if (minute > 59) {
            hour++;
            if (hour < 10) {
                hourField.innerHTML = '0' + hour;
            }
            if (hour >= 10) {
                hourField.innerHTML = hour;
            }
            minute = 0;
            minuteField.innerHTML = '0' + minute;
        }
        second = 0;
        secondField.innerHTML = '0' + second
    }
};

const resetReadout = () => {
    hour = 0;
    minute = 0;
    second = 0;
    hourField.innerHTML = '00';
    minuteField.innerHTML  = '00';
    secondField.innerHTML = '00';
}