setInterval(() => {
    const time = new Date();
    
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    let hours = time.getHours();
    hours = (hours > 12) ? hours-12 : hours;    

    const seconds_deg = seconds * 6;
    const minutes_deg = minutes * 6 + Math.floor(seconds / 10);
    const hours_deg = hours * 30 + Math.floor(minutes / 2);

    secondStick.style.transform = `translateX(-50%) rotate(${seconds_deg}deg)`;
    minuteStick.style.transform = `translateX(-50%) rotate(${minutes_deg}deg)`;
    hourStick.style.transform = `translateX(-50%) rotate(${hours_deg}deg)`;
}, 1000);

const secondStick = document.querySelector('.second-stick');
const minuteStick = document.querySelector('.minute-stick');
const hourStick = document.querySelector('.hour-stick');

document.querySelector('#theme').addEventListener('click', () => {

    const rootVars = document.documentElement.style;
    let theme, mainBg, clockBg, textColot;
    if(rootVars.getPropertyValue('--theme') !== 'light') {
        theme = 'light';
        mainBg = 'linear-gradient(135deg, #ffffff, #dddddd)';
        clockBg = '#ffffff';
        textColor = 'rgba(0, 0, 0, .5)';
    } else {
        theme = 'dark';
        mainBg = 'linear-gradient(135deg, #090B1A, #1B262C)';
        clockBg = '#090B1A';
        textColor = 'rgba(255, 255, 255, .5)';
    }

    rootVars.setProperty('--theme', theme);
    rootVars.setProperty('--main-bg-color', mainBg);
    rootVars.setProperty('--clock-bg-color', clockBg);
    rootVars.setProperty('--brand-color', textColor);
})