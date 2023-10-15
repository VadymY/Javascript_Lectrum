/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(val, rep) {
    let ret = [];
    if (typeof val === "object" || typeof val === "number" || typeof val === "string") {
        if (!rep || typeof rep !== "number") {
            throw new Error("wrong second argument");
        }

        for (let i = 0; i < rep; ++i) {
            ret.push(val);
        }
    }
    else {
        throw new Error("wrong first argument");
    }

    return ret;
}

try {
    const result = createArray('x', 5);
    console.log(result); // [ x, x, x, x, x ]
}
catch(e){
    console.log(e.message);
}

exports.createArray = createArray;
