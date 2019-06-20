const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    timer.style.display = 'block';
    const interval = setInterval(() => {
        let timerNumber = +timer.innerText;
        timer.innerText = --timerNumber;

        if(timerNumber < 0)  {
            timer.style.display = 'none';
            stopBtn.style.display ='flex'
            clearInterval(interval);
            timer.innerText = 150;
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    stopBtn.style.display = 'none';
    startBtn.style.display = 'flex';
})