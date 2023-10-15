/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f (args)
{
    if (typeof(args) !== "object" || !args)
    {
        throw new Error("not an array");
    }

    if (args.length == 0)
    {
        throw new Error("array must be not empty");
    }

    if (args.length === 1)
    {
        return console.log(args[0]);
    }

   let temp = args.splice(0, args.length - 1);
   f(temp);
   return console.log(args[0]);
}

f([1, 2, 3]);

// 1
// 2
// 3

exports.f = f;
