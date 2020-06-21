// var answer = prompt("Какое официальное название JavaScript", "");
// if (answer != "ECMAscript") {
//     alert("Не знаете? ECMAscript");
// } else {
//     alert("Верно!");
// }


// var answer = prompt("Укажи любое число", "");
// if (answer > 0) {
//     alert("1");
// } else if (answer < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }




// var answer = prompt("Кто пришел?", "");
// if (answer === "Админ") {
//     var pass = prompt("укажите пароль");
//     if (pass === "Чёрный властелин") {
//         alert("Добро пожаловать!");
//     } else if (pass == null) {
//         alert("Вход отменен");
//     } else {
//         alert("пароль неверен");
//     }
// } else if (answer == null) {
//     alert("Вход отменен");
// } else {
//     alert("я вас не знаю");
// }


// var i = 0;
// while (i < 3) {
//     alert("номер " + i + "!");
//     i++;
// }


var answer;

do {
    answer = prompt("укажи число больше 100", "");
} while (answer < 100);

