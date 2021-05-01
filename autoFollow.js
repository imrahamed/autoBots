var buttons = document.querySelectorAll('.sqdOP.L3NKy.y3zKF');

for (var i = 0; i< 100 && i < buttons.length; i++) {
    let button = buttons[i]
    setTimeout(function timer() {
        console.log(i);
        button.click()
    }, (i * 15  * 1000) + ((Math.floor(Math.random() * 31) + 50) * 100));
}
