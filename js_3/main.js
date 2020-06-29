function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

var test = document.querySelectorAll('.test');
window.addEventListener('click', changeColor);
function clickNumber() {

}
function changeColor() {
    for (var i = 0; i < test.length; i++) {

        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        test[i].style.backgroundColor = rndCol;
    }
}




