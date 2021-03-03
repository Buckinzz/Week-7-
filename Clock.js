let hours = document.querySelector(`.hours`);
let mins = document.querySelector(`.mins`);
let clockHours = [1,2,3,4,5,6,7,8,9,10,11,12];

setInterval(() => {
    let clockMins = Number(mins.innerHTML);
    clockMins++;
    if(clockMins !== 60) {
        if(String(clockMins).length === 1) {
            mins.innerHTML = `0${clockMins}`;
        } else {
            mins.innerHTML = clockMins;
        }
    } else {
        let currentHour = clockHours.indexOf(Number(hours.innerHTML));
        if(currentHour === (clockHours.length - 1)) {
            hours.innerHTML = clockHours[0];
            mins.innerHTML = `00`;
        } else {
            hours.innerHTML = clockHours[(currentHour + 1)];
            mins.innerHTML = `00`;
        }
    }
}, 1000);