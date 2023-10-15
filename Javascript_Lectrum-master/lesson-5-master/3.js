/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(a, b, c){
    let ar = [a, b, c];
    for  (let item of ar)
    {
        if ( typeof(item) !== "number")
        {
            throw new Error("not a number");
        }
    }

    if (c === 0)
    {
        throw new Error("third argument must be not null");
    }

    return (a - b) / c;
}

f(9, 3, 2); // 3

exports.f = f;
