/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(arr){

    let recur_ret = function recur(arr) {
        if (arguments.length > 0) {
            if (!Array.isArray(arguments[0])) {
                if (typeof arguments[0] !== 'number'){
                    throw new Error("not a number");
                }
                throw new Error("not an array");
            }
            return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(recur(val)) : acc.concat(val), []);
        }
    }
    let temp = recur_ret(arr);
    if(temp.length > 0) {
        return temp.reduce((sum, item) => sum + item);
    }
    else{
        return 0;
    }
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
