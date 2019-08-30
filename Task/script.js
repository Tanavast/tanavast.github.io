function inputRead() {
    let str = document.getElementById("input-area").value;

    alert("Введенные данные: " + str);
    alert("Количество символов: " + str.length);
    alert("Последний символ: " + str[str.length-1]);
    alert("Перевод в верхний регистр: " + str.toLocaleUpperCase());
}

document.getElementById("input-btn").onclick = inputRead;





var clock = document.getElementById('clock');


function Clock() {
    var time = new Date();
    var h = (time.getHours() + 3).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;

    clock.textContent = clockString;
}

Clock();
setInterval(Clock, 1000);

