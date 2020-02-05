// var obj = {
//   name: "Andrey",
//   age: 38,
//   lastName: "Ognivenko"
// };
// console.log(obj.lastName + obj.age);
// document.writeln(obj.name);

// if (2 * 4 == 7) {
//   console.log("Все правильно получилось");
// } else {
//   console.log("вообще не равно");
// }

// 2 * 4 == 8
//   ? console.log("Все правильно получилось")
//   : console.log("вообще не равно");

let num = 40;

switch (num) {
  case 40:
    console.log("мало");
    break;
  case num > 50:
    console.log("много");
    break;
  case 50:
    console.log("то что надо");
    break;
  default:
    console.log("что-то пошло не так");
    break;
}
