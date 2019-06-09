let playBtn = document.getElementsByClassName('play-btn_active');
let playScoreboard = document.getElementsByClassName('play-scoreboard');
let leftDoor = document.getElementsByClassName('left-door');
let rightDoor = document.getElementsByClassName('right-door');
let initialScreen = document.getElementById('initialScreen');

playBtn[0].onclick = function() {
    playScoreboard[0].classList.add("play-scoreboard_active");
    leftDoor[0].classList.add("left-door_active");
    rightDoor[0].classList.add("right-door_active");
    setTimeout(function dpNone() {initialScreen.style.display = 'none';}, 5000);
}
