// 1.
// Создать функцию, которая будет принимать 3 числа в качестве аргументов, функция должна возвращать сумму первых двух чисел
// разделённую на третье число(использовать function declaration, а также реализовать проверку на то,
// что третье число не является нулем, если это ноль, то просто возвратить результат сложения первого и второго числа)

function newFunc(num1, num2, num3) {
    if (num3 > 0) {
        return (num1 + num2) / num3;
    } else {
        return num1 + num2;
    }
}

console.log(newFunc(12, 12, 0));

// 2.
// Создать функцию, которая принимает в качестве аргумента массив со строками и в каком регистре нужно вернуть данные,
// строки могут быть записаны в любом регистре, задача: на основе выбора регистра, возвращать либо массив со строками
// в верхнем регистре, либо в нижнем регистре

let newFunc1 = (arr) => {
    let result = [];
    for (i of arr) {
        let newArr = i.toUpperCase();
        if (i == newArr) {
            result.push(i.toLowerCase());
        } else {
            result.push(i.toUpperCase());
        }
    }
    return result;
};
console.log(newFunc1(["amin", "genius"]));

// 3.
// Создать калькулятор используя функции, должны быть доступны операции(+, -, /, *),
// также должна быть функция-менеджер, которая будет принимать 2 числа и операцию, а затем вызывать нужную функцию и возвращать результат

let newFunc2 = (a, b, culc) => {
    let sum = 0;
    if (culc == "+") {
        sum = a + b;
    } else if (culc == "-") {
        sum = a - b;
    } else if (culc == "*") {
        sum = a * b;
    } else if (culc == "/") {
        sum = a / b;
    }
    return sum;
};
console.log(newFunc2(10, 5, "/"));

// 4.
// Дан массив с объектами
// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники,
// отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере

let users = [
    { name: "Jack", age: 35, work: "IT-backend developer" },
    { name: "Helen", age: 35, work: "Nurse" },
    { name: "Bob", age: 35, work: "Driver" },
    { name: "Jessica", age: 35, work: "IT-frontend developer" },
    { name: "Hel'ga", age: 35, work: "IT-HR" },
];
let newFunc3 = users.filter((elem) => {
    if (elem.work.includes("IT")) {
        return elem;
    }
});
console.log(newFunc3);

// 5.
// Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет принимать 2 аргумента 1-й
// сколько всего километров проехали, второй сколько понадобилось топлива на это, затем функция должна рассчитать
// сколько ушло топлива на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'

let newFunc4 = (km, top) => {
    let sumOfGas = (100 / km) * top;
    return `На ${km}км было расходовано ${sumOfGas}л горючего`;
};
console.log(newFunc4(100, 10));

//! let newFunc5 = (km, top) => {
//!     return `На ${km}км было расходовано ${top}л горючего`;
//! };
//! console.log(newFunc4(100, 10)); - так можно ?

// 6.
// Расчет премии сотрудникам, дан массив с объектами
let employees = [
    { name: "Jack", salary: 10000, overTime: 4 },
    { name: "Tom", salary: 15000, overTime: 3 },
    { name: "Jessica", salary: 20000, overTime: 9 },
    { name: "Helen", salary: 25000, overTime: 2 },
    { name: "Peter", salary: 30000, overTime: 7 },
];
// salary- это заработная плата в месяц, overTime- количество часов, которое сотрудник взял сверхурочно,
// задача: создать функцию, которая будет добавлять к основной зарплате сверхурочное время(1час=200$),
// функция должна принимать массив с объектами и возвращать также массив, но уже с измененными данными пример:
//  [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]
employees.forEach((elem) => {
    if (elem.overTime > 0) {
        let finPrice = elem.overTime * 200;
        if (elem.overTime > 0) {
            elem.salary += finPrice;
        }
    }
    return elem;
});
console.log(employees);

// 7.
// Создать функцию, которая в качестве аргумента будет принимать массив со строками и числами,
// задача, отсортировать числа в отдельный массив, а строки в отдельный и распечатать оба массива.

let newFunc5 = (array) => {
    let numbersArray = [];
    let stringsArray = [];

    for (let i of array) {
        if (typeof i === "number") {
            numbersArray.push(i);
        } else if (typeof i === "string") {
            stringsArray.push(i);
        }
    }

    return [...numbersArray, ...stringsArray];
};
console.log(newFunc5(["Amin", 16, "genius", "smart", 122, "ig", 23]));

// function fooFunc(a, b, c, d, e) {
//     console.log(arguments[0]); - первый
//     console.log(...arguments); - все
//     console.log(arguments.length); - длина
// }
// fooFunc(1, 2, 3, 4, 5);

// 8.
// Дан массив
// задача, создать фуункцию, которая будет в качестве аргумента принимать массив такого вида как указан выше,
// и будет возвращать отсортированный массив(сортировать по убыванию оценок, используйте sort())
let students = [
    { student: "Jack", marks: 43 },
    { student: "Tom", marks: 92 },
    { student: "Helen", marks: 85 },
    { student: "Peter", marks: 58 },
    { student: "Jessica", marks: 78 },
];

students.forEach((elem, index, arr) => {
    arr.sort((a, b) => b.marks - a.marks);
});
console.log(students);

// 9. EXTRA
// Дан пустой массив, необходимо использовать его в качестве базы данных для объектов типа {title: 'str', price: num, category: 'str'},
// задача реализовать полный CRUD(create(должна быть возможность создавать данные, в нашем случае объекты),
// read(возможность получения/чтения данных), update(изменение данных(можно использовать индекс)),
// delete(удаление данных(можно использовать индекс))), за каждое действие должна отвечать отдельная функция