const endTime = new Date('2020-09-05 22:15:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / (1000)) % 60);
    spanD.textContent = `${days}`;
    spanH.textContent = `${hours}`;
    spanM.textContent = `${minutes}`;
    spanS.textContent = `${seconds}`;
}, 1000);