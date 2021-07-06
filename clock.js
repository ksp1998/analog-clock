setInterval(() => {
    const time = new Date();
    
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    let hours = time.getHours();
    hours = (hours > 12) ? hours-12 : hours;    

    const seconds_deg = seconds * 6;
    const minutes_deg = minutes * 6 + Math.floor(seconds / 10);
    const hours_deg = hours * 30 + Math.floor(minutes / 2);
    
    document.getElementsByClassName('second-stick')[0].style.transform = `translateX(-50%) rotate(${seconds_deg}deg)`;
    document.getElementsByClassName('minute-stick')[0].style.transform = `translateX(-50%) rotate(${minutes_deg}deg)`;
    document.getElementsByClassName('hour-stick')[0].style.transform = `translateX(-50%) rotate(${hours_deg}deg)`;
}, 1000);