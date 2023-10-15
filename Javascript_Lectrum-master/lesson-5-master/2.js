/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(...args){
    let sum = 0;
    for (let i of args) {
        let cond = false;
        try {
            if (typeof (i) !== "number") {
                throw new Error("Not a number");
            }
        }
        catch (e) {
            console.log(e.message);
            cond = true;
        }
        finally{
            if (!cond) {
                sum += i;
            }
        }
    }

    return sum;
}

f(1, 1, 1, 2, 1, 1, 1, 1); // 9

exports.f = f;
