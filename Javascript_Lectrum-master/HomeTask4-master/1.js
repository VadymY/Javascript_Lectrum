/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};
// Решение

Object.defineProperty(person, "salary", {
    get() {
        let date_now = new Date();
        let next_date = new Date(date_now.getFullYear(), date_now.getMonth() + 1, 0);
        let dif = new Date(next_date - date_now);
        let dif_day =  dif.getDate();
        return (dif_day > 20) ? "good salary" : "bad salary"
    },
    enumerable : true
})

person.salary; // good salary

exports.person = person;
