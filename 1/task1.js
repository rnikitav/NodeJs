'use strict';
/*
Напишите программу для вывода в консоль простых чисел, чтобы они попадали в
указанный диапазон включительно. При этом числа должны окрашиваться
в цвета по принципу светофора:

первое число выводится зелёным цветом;
второе — жёлтым;
третье — красным.

Диапазон, куда попадут числа, указывается при запуске программы.
Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале красным цветом.
Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и завершите программу.

 */

const colors = require('colors');
colors.enable();

const min = Math.floor(Number(process.argv[2]));
const max = Math.ceil(Number(process.argv[3]));
const colorsLight = ['green', 'yellow', 'red'];

/**
 * function gets all list of prime numbers from range
 * from min to max number
 * @param {Number} min
 * @param {Number} max
 * @return {Array}
 */
function getListOfPrimeNumbersFromRange(min, max)
{
    let result = [];
    for (let i = min; i <= max;){
        if (getBoolOfPrimeNumbers(i)){
            result.push(i);
        }
        if (i <= 2 || i % 2 === 0)
        {
            i++
        } else {
            i+=2;
        }
    }

    return result;

}
/**
 * function checks if a variable is a prime number
 * @param {Number} num
 * @return {boolean}
 */
function getBoolOfPrimeNumbers(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num > 10)
    {
        if (num % 2 === 0 || num % 5 === 0)
        {
            return false;
        }
    }

    for (let divider = 2; divider < num; divider++) {
        if (num % divider === 0)
        {
            return false;
        }
    }
    return true;
}

module.exports.ExecuteTask1 = (funcColorsLight = colorsLight) => {
    if (isNaN(min) || isNaN(max)) {
        console.log(colors.red.bold('Вводить необходимо два числа больше либо равные 0'));
        return;
    }
    const result = getListOfPrimeNumbersFromRange(min, max);

    if (!result.length) {
        console.log(colors.yellow.bold(`В диапазоне ${min}-${max} нет простых чисел.`));
        return;
    }
    const colorsCount = funcColorsLight.length;
    let colorIndex = 0;

    for (let i = 0; i < result.length; i++) {
        console.log(colors[funcColorsLight[colorIndex]](result[i]));
        colorIndex = colorIndex + 1 === colorsCount ? 0 : colorIndex + 1;
    }
};
