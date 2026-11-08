const temperatures = [12, 24, 8, 31, 19, 5, 27];

/* Функции для массива*/

// 1. Поиск максимальной температуры
function findHottestDay(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// 2. Фильтрация тёплых дней (> 20 °C)
function filterWarmDays(arr) {
    return arr.filter(t => t > 20);
}

// 3. Средняя температура по массиву
function calculateAverageTemp(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

// 4. Подсчёт холодных дней (≤ 10 °C) и их средней температуры
function countColdDays(arr) {
    let count = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 10) {
            count++;
            sum += arr[i];
        }
    }
    
    // Защита от деления на ноль, если холодных дней нет
    const average = count > 0 ? sum / count : 0;
    
    return { count, average };
}

// 5. Склонение слова «день»
function pluralDays(n) {
    const mod10  = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'день';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'дня';
    return 'дней';
}

/*Основная логика (Глобальный код)*/

const userName = prompt('Как вас зовут?', 'Гость');
const name = userName && userName.trim() !== '' ? userName.trim() : 'Гость';

// Вызовы функций
const hottest    = findHottestDay(temperatures);
const warmDays   = filterWarmDays(temperatures);
const warmCount  = warmDays.length;
const averageAll = calculateAverageTemp(temperatures);

// Вызов новой функции для холодных дней
const coldStats = countColdDays(temperatures);

/*Вывод  */

// Проверка на жару
if (hottest >= 30) {
    console.log('Рекомендуется предусмотреть навесы и воду для гостей');
}

// Alert с результатами
alert(
    `Привет, ${name}!\n` +
    `Средняя температура за период — ${averageAll.toFixed(1)} °C, ` +
    `было ${warmCount} тёплых ${pluralDays(warmCount)}.`
);

// Console.log с результатами по холодным дням
console.log(`Средняя температура в холодные дни: ${coldStats.average.toFixed(1)} °C`);
console.log(`Количество холодных дней: ${coldStats.count}`);
console.log(`Максимальная температура: ${hottest} °C`);
console.log(`Тёплые дни (>20 °C): ${warmDays.join(', ')} °C`);