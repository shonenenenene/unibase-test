const arr = [10, 12, 15, 20];

// В случае ниже вывод в консоль будет следующий:
// Bad: undefined
// Bad: undefined
// Bad: undefined
// Bad: undefined
// Это связано с тем, что при использовании var создается одна переменная на все итерации цикла
// и setTimeout сработает 4 раза с последним значением i, в нашем случае с i = 4.
// Элемента с таким номером в массиве arr попросту нет.

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}

// 1 ВАРИАНТ:

// Заменив var на let мы получим искомый результат:
// Bad: 10
// Bad: 12
// Good: 15
// Good: 20
// В случае с let при каждой итерации будет создаваться новая переменная и
// setTimeout будет вызываться каждый раз в соответсвующем итерации контексте.

for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}

// 2 ВАРИАНТ:

arr.forEach((e) => {
  setTimeout(function () {
    console.log(e > 13 ? `Good: ${e}` : `Bad: ${e}`);
  }, 3000);
});
