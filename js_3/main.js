// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }
//
// var test = document.querySelectorAll('.test');
// window.addEventListener('click', changeColor);
// function clickNumber() {
//
// }
// function changeColor() {
//     for (var i = 0; i < test.length; i++) {
//
//         var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//         test[i].style.backgroundColor = rndCol;
//     }
// }


function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


var test = document.querySelectorAll('.test');
for (var i = 0; i < test.length; i++) {
    test[i].addEventListener('click', function() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        window.style.backgroundColor = rndCol;
    })
}

function changeColor() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    window.style.backgroundColor = rndCol;
}

function doSomthing() {

}

doSomthing();

var a = 3;
var b = a;

a = 6;

var obj1 = {
    prop: 34,

}
var obj2 = obj1;

obj1 = {
    propz: 'prop'
}

let dor = 'string';