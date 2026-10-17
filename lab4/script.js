const temperatures = [12, 24, 8, 31, 19, 5, 27];

/* Функции для массива*/

function findHottestDay(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function filterWarmDays(arr) {
    return arr.filter(t => t > 20);
}

function calculateAverageTemp(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

/* Склонение слова «день»*/

function pluralDays(n) {
    const mod10  = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'день';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'дня';
    return 'дней';
}

/*Основная логика */

const userName = prompt('Как вас зовут?', 'Гость');
const name = userName && userName.trim() !== '' ? userName.trim() : 'Гость';

const hottest    = findHottestDay(temperatures);
const warmDays   = filterWarmDays(temperatures);
const warmCount  = warmDays.length;
const averageAll = calculateAverageTemp(temperatures);

let coldCount = 0;
let coldSum   = 0;
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] <= 10) {
        coldCount++;
        coldSum += temperatures[i];
    }
}
const coldAverage = coldCount > 0 ? coldSum / coldCount : 0;

if (hottest >= 30) {
    console.log('Рекомендуется предусмотреть навесы и воду для гостей');
}

/* Вывод */

alert(
    `Привет, ${name}!\n` +
    `Средняя температура за период — ${averageAll.toFixed(1)} °C, ` +
    `было ${warmCount} тёплых ${pluralDays(warmCount)}.`
);

console.log(`Средняя температура в холодные дни: ${coldAverage.toFixed(1)} °C`);
console.log(`Количество холодных дней: ${coldCount}`);
console.log(`Максимальная температура: ${hottest} °C`);
console.log(`Тёплые дни (>20 °C): ${warmDays.join(', ')} °C`);